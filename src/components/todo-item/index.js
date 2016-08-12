var todoItem = {
  controller: todoItemController,
  template: require('./todo-item.html'),
  bindings: {
    index: '<',
    description: '<',
    completed: '<',
    onDelete: '&',
    onUpdate: '&',
    onToggle: '&'
  }
};

function todoItemController() {
  var self = this;

  self.$onInit = function $onInit() {
    self.editing = false;
  };

  self.enableEditing = function enableEditing() {
    self.editing = true;
  };

  self.deleteTodo = function deleteTodo() {
    // Call parent
    self.onDelete({
      $event: {
        index: self.index
      }
    });
  };

  self.updateTodo = function updateTodo() {
    // Call parent
    self.onUpdate({
      $event: {
        index: self.index,
        todo: {
          description: self.description
        }
      }
    });

    self.editing = false;
  };

  self.toggleTodo = function toggleTodo() {
    // Call parent
    self.onToggle({
      $event: {
        index: self.index
      }
    });
  };
}

module.exports = todoItem;

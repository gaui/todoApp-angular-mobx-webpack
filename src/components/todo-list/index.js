var todoList = {
  controller: todoListController,
  template: require('./todo-list.html'),
  bindings: {
    list: '<',
    onDelete: '&',
    onUpdate: '&',
    onToggle: '&'
  }
};

function todoListController() {
  var self = this;

  self.deleteTodo = function deleteTodo(event) {
    // Call parent
    self.onDelete({
      $event: {
        index: event.index
      }
    });
  };

  self.updateTodo = function updateTodo(event) {
    // Call parent
    self.onUpdate({
      $event: {
        index: event.index,
        todo: event.todo
      }
    });
  };

  self.toggleTodo = function toggleTodo(event) {
    // Call parent
    self.onToggle({
      $event: {
        index: event.index
      }
    });
  };
}

module.exports = todoList;

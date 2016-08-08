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

  self.deleteTodo = function deleteTodo(index) {
    // Call parent
    self.onDelete({
      $index: index
    });
  };

  self.updateTodo = function updateTodo(event) {
    // Call parent
    self.onUpdate({
      $event: {
        index: event.index,
        description: event.description
      }
    });
  };

  self.toggleTodo = function toggleTodo(index) {
    // Call parent
    self.onToggle({
      $index: index
    });
  };
}

module.exports = todoList;

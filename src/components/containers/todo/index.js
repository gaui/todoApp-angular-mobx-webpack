var mobx = require('mobx');

var todoContainer = {
  controller: todoContainerController,
  template: require('./todo.html'),
  bindings: {
    filter: '<'
  }
};

function todoContainerController(todoStore, $state) {
  var self = this;

  var dispose = mobx.autorun(function () {
    self.todoList = getListBasedOnFilter(todoStore.todoList, self.filter);
    console.log('%cNEW STATE:', 'font-weight: bold');
    console.log(JSON.stringify(mobx.toJS(self.todoList), null, 2));
    self.incompletedItems = getListBasedOnFilter(self.todoList, 'active').length;
  });

  self.$onDestroy = function $onDestroy() {
    dispose();
  };

  self.addTodo = function addTodo(todo) {
    todoStore.addTodo(todo);
  };

  self.deleteTodo = function deleteTodo(index) {
    todoStore.deleteTodo(index);
  };

  self.updateTodo = function updateTodo(event) {
    todoStore.updateTodo(event.index, event.description);
  };

  self.toggleTodo = function toggleTodo(index) {
    todoStore.toggleTodo(index);
  };

  self.toggleAllTodos = function toggleAllTodos() {
    todoStore.toggleAllTodos();
  };

  self.clearCompleted = function clearCompleted() {
    todoStore.clearCompleted();
  };

  function getListBasedOnFilter(list, filter) {
    if (!filter) return list;

    var filterMap = {
      all: function (item) { return true; },
      active: function (item) { return !item.completed },
      completed: function (item) { return item.completed }
    };

    return list.filter(filterMap[filter]);
  }
}

module.exports = todoContainer;

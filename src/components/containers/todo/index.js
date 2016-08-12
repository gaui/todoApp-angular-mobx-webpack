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
    var todoList = todoStore.getAllTodos();
    self.todoList = getListBasedOnFilter(todoList, self.filter);
    self.incompletedItems = getListBasedOnFilter(todoList, 'active').length;
    console.log('%cNEW STATE:', 'font-weight: bold');
    console.log(JSON.stringify(mobx.toJS(todoList), null, 2));
  });

  self.$onDestroy = function $onDestroy() {
    dispose();
  };

  self.addTodo = function addTodo(event) {
    todoStore.addTodo(event.todo);
  };

  self.deleteTodo = function deleteTodo(event) {
    todoStore.deleteTodo(event.index);
  };

  self.updateTodo = function updateTodo(event) {
    todoStore.updateTodo(event.index, event.todo);
  };

  self.toggleTodo = function toggleTodo(event) {
    todoStore.toggleTodo(event.index);
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

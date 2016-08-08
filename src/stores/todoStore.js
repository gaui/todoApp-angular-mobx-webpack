var mobx = require('mobx');

function todoStore() {
  var store = this;

  store.todoList = mobx.observable([]);

  store.addTodo = function addTodo(todo) {
    var newTodo = Object.assign({}, todo, {
      completed: false
    });

    store.todoList.push(newTodo);
  };

  store.deleteTodo = function deleteTodo(index) {
    store.todoList.splice(index, 1);
  };

  store.updateTodo = function updateTodo(index, description) {
    store.todoList[index].description = description;
  };

  store.toggleTodo = function toggleTodo(index) {
    store.todoList[index].completed = !store.todoList[index].completed;
  };

  store.toggleAllTodos = function toggleAllTodos() {
    store.todoList.forEach(function(item) {
      item.completed = !item.completed;
    });
  };

  store.clearCompleted = function clearCompleted() {
    var filteredArray = store.todoList.filter(function(item) {
      return !item.completed;
    });

    store.todoList.replace(filteredArray);
  };
}

module.exports = todoStore;

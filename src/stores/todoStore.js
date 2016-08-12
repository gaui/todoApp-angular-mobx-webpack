var mobx = require('mobx');

function todoStore() {
  var store = this;
  var todoList = mobx.observable([]);

  store.getAllTodos = function getAllTodos() {
    return todoList;
  };

  store.addTodo = function addTodo(todo) {
    var newTodo = Object.assign({}, todo, {
      completed: false
    });

    todoList.push(newTodo);
  };

  store.deleteTodo = function deleteTodo(index) {
    todoList.splice(index, 1);
  };

  store.updateTodo = function updateTodo(index, todo) {
    todoList[index].description = todo.description;
  };

  store.toggleTodo = function toggleTodo(index) {
    todoList[index].completed = !todoList[index].completed;
  };

  store.toggleAllTodos = function toggleAllTodos() {
    todoList.forEach(function(item) {
      item.completed = !item.completed;
    });
  };

  store.clearCompleted = function clearCompleted() {
    var filteredArray = todoList.filter(function(item) {
      return !item.completed;
    });

    todoList.replace(filteredArray);
  };
}

module.exports = todoStore;

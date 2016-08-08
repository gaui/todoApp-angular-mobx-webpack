var todoContainer = require('./containers/todo');
var todoForm = require('./todo-form');
var todoList = require('./todo-list');
var todoItem = require('./todo-item');
var todoFooter = require('./todo-footer');

angular.module('todoApp')
  .component('todo', todoContainer)
  .component('todoForm', todoForm)
  .component('todoList', todoList)
  .component('todoItem', todoItem)
  .component('todoFooter', todoFooter);

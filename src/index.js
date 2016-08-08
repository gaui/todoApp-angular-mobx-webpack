var todoStore = require('./stores/todoStore');

// Styles
require('./index.less');

angular.module('todoApp', ['ui.router'])
  .service('todoStore', todoStore)
  .config(config);

function config($stateProvider, $httpProvider,
  $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(false);

  $stateProvider
    .state('todo', {
      abstract: true,
      url: '/',
      template: '<ui-view />'
    })
    .state('todo.all', {
      url: '',
      component: 'todo',
      resolve: {
        filter: function () {
          return 'all'
        }
      }
    })
    .state('todo.active', {
      url: 'active',
      component: 'todo',
      resolve: {
        filter: function () {
          return 'active'
        }
      }
    })
    .state('todo.completed', {
      url: 'completed',
      component: 'todo',
      resolve: {
        filter: function () {
          return 'completed'
        }
      }
    });
}

require('./components');

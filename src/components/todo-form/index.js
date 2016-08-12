var todoForm = {
  controller: todoFormController,
  template: require('./todo-form.html'),
  bindings: {
    onSubmit: '&'
  }
};

function todoFormController() {
  var self = this;

  self.$onInit = function $onInit() {
    self.newTodo = {};
    resetTodo();
  };

  self.submitForm = function submitForm() {
    // Call parent
    self.onSubmit({
      $event: {
        todo: self.newTodo
      }
    });

    resetTodo();
  };

  function resetTodo() {
    self.newTodo = {};
  }
}

module.exports = todoForm;

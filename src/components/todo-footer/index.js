var todoFooter = {
  controller: todoFooterController,
  template: require('./todo-footer.html'),
  bindings: {
    itemsLeft: '<',
    onClearCompleted: '&'
  }
};

function todoFooterController() {
  var self = this;

  self.clearCompleted = function clearCompleted() {
    // Call parent
    self.onClearCompleted();
  };
}

module.exports = todoFooter;

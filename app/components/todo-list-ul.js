import Ember from 'ember';

export default Ember.Component.extend({
  todoViews: Ember.computed(function() {
    var todoViews = [];
    this.childViews.map(function(childView) {
      if (childView.__proto__._debugContainerKey.indexOf('todo-list-elem') != -1) {
        todoViews.push(childView);
      }
    });
    return todoViews;
  }),
  actions: {
    todos: [],
    addTodo() {
      console.log($(this.element).find('ul'));
    },
    autoFilter(filter) {
      this.get('todoViews').forEach(function(todoView){
        todoView.set('isHidden', todoView.todo.get('description').toLowerCase().indexOf(filter.toLowerCase()) == -1);
      });
    }
  }
});

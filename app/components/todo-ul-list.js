import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addTodo() {
      console.log($(this.element).find('ul'));
    }
    ,
    autoFilter(filter) {
      console.log(filter);
    }
  }
});

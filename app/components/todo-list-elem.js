import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['list-group-item todo'],
  classNameBindings: ['isHidden:hide'],
  isHidden: false,
  actions: {
  }
});

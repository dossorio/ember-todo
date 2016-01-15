import Ember from 'ember';

var todos = [
  {desc: 'Buy bread'},
  {desc: 'Be a better developer'},
  {desc: 'Learn emberjs'},
];

export default Ember.Route.extend({
  model(){
    return todos;
  },
});

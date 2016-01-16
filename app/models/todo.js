import DS from 'ember-data';

export default DS.Model.extend({
  desc: DS.attr(),
  done: DS.attr()
});

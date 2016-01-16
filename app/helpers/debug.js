import Ember from 'ember';

export function debug(param) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);

  if (param) {
    console.log("Value");
    console.log("====================");
    console.log(param);
  }
};

export default Ember.Helper.helper(debug);

import Ember from 'ember';
import OrderValidations from '../validations/order';

export default Ember.Controller.extend({
  OrderValidations

 ,actions: {
    submit(changeset) {
      changeset.save();
    } 
  }
});

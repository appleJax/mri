import Ember from 'ember';
import Changeset from 'ember-changeset';
import OrderValidations from '../validations/order';

export default Ember.Component.extend({
  init() {
    this._super();
    let model = Ember.get(this, 'model');
    this.changeset = new Changeset(model, OrderValidations);
  }

 ,actions: {
    submit(changeset) {
      changeset.save();
      console.log(changeset.errors);
    }
  }
});

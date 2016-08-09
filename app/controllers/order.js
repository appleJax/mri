import Ember from 'ember';
import OrderValidations from '../validations/order';

export default Ember.Controller.extend({
  OrderValidations

 ,actions: {
    submit(changeset) {
      return changeset.save();
    }

   ,updateItem(item) {
      let newQty = Math.ceil(Number(item.quantity));

      if (item.quantity === '') {
        return;
      }
      if (newQty <= 0 ) {
        this.get('store').removeOrderItem(item);
        console.log(this.model.items.length);
        if (this.model.items.length === 0) {
          // Transition to index.hbs - TODO: move controller to route
        }
      } else if (newQty > 2000) {
        item.set('quantity', 2000);
      } else {
        item.set('quantity', newQty);
      }
    }
  }

 ,store: Ember.inject.service()
});

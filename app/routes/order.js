import Ember from 'ember';
import OrderValidations from '../validations/order';

export default Ember.Route.extend({
  OrderValidations

 ,actions: {
    addMoreItems() {
      this.transitionTo('index');
    }

 ,updateItem(item, order) {
    let newQty = Math.ceil(Number(item.quantity));

    if (item.quantity === '') {
      return;
    }
    if (newQty <= 0 ) {
      this.get('store').removeOrderItem(item);
      if (order.items.length === 0) {
        this.transitionTo('index');
      }
    } else if (newQty > 2000) {
      item.set('quantity', 2000);
    } else {
      item.set('quantity', newQty);
    }
  }

   ,decItem(item, order) {
      this.get('store').decrementItem(item);
      if (order.items.length === 0) {
        this.transitionTo('index');
      }
    }

   ,incItem(item) {
      this.get('store').incrementItem(item);
    }

   ,removeItem(item, order) {
      this.get('store').removeOrderItem(item);
      if (order.items.length === 0) {
        this.transitionTo('index');
      }
    }

  ,toggleTech() {
     this.get('store').toggleTech();
   }

  ,requestQuote(order) {
     if (order.items.length > 0) {
       this.get('store').requestForQuote(order);
       this.transitionTo('success');
     } else {
       // Error Message: Please Add Some Items
     }
   }
  }

 ,model() {
    return this.get('store').getOrder();
  }

 ,store: Ember.inject.service()
});

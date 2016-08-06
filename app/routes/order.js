import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addMoreItems() {
      this.transitionTo('index');
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

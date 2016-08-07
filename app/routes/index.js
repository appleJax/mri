import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    expandSection(section) {
      this.get('store').expandSection(section);
    }

   ,incItem(item) {
      this.get('store').incrementItem(item);
    }

   ,decItem(item) {
      this.get('store').decrementItem(item);
    }

   ,removeItem(item) {
      this.get('store').removeOrderItem(item);
    }

   ,reviewOrder(orderItems) {
      if (orderItems.length > 0) {
        this.transitionTo('order');
      } else {
        // Display Error Message Prompting User to Add Items
      }
    }
  }

 ,model() {
    const storeObject = {
      catalogue: this.get('store').getCatalogue()
     ,order: this.get('store').getOrder()
    };

    return storeObject; 
  }

 ,store: Ember.inject.service()
});

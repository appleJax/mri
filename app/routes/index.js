import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    incItem(item) {
      this.get('store').incrementItem(item);
    }
   ,decItem(item) {
      this.get('store').decrementItem(item);
    }
   ,setQuantity(item, value) {
      this.get('store').setItemQuantity(item, value);
    }
   ,addItem(item) {
      let order = this.get('store').getOrder();

      if ( order.items.includes(item) ) {
        item.set('quantity', item.quantity);
        order.items.notifyPropertyChange('quantity');
      } else {
        this.get('store').addOrderItem(item);
      }
    }
   ,reviewOrder(orderItems) {
      if (orderItems.length > 0) {
        this.transitionTo('order');
      } else {
        // Error Message: Please Add Some Items
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

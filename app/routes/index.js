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

   ,updateItem(item, order) {
      if (item.quantity === '') {
        if (order.items.includes(item)) {
          item.set('ordered', false);
          order.items.removeObject(item);
        }
        return;
      }

      let newQty = Math.ceil(Number(item.quantity));

      if (newQty < 0) {
        item.set('quantity', 0);
        if (order.items.includes(item)) {
          item.set('ordered', false);
          order.items.removeObject(item);
        }
      } else if (newQty > 2000) {
        item.set('quantity', 2000);
      } else {
        item.set('quantity', newQty);
      }

      if (!order.items.includes(item) && newQty > 0) {
        item.set('ordered', true);
        order.items.pushObject(item);
      } else if (order.items.includes(item) && newQty === 0) {
        order.items.removeObject(item);
        item.set('ordered', false);
      }
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

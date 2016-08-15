import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addMoreItems(order) {
      order.set('emptyCartError', false);
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

  ,validateForm(order) {
    let name = order.name.trim();
    let email = order.email.trim();
    let location = order.location.trim();
    let startDate = order.startDate;

    if (name === '') {
      order.set('validName', false);
    } else {
      order.set('validName', true);
    }

    if (email.search(/.+@.+\..+/)) {
      order.set('validEmail', false);
    } else {
      order.set('validEmail', true);
    }

    if (location === '') {
      order.set('validLocation', false);
    } else {
      order.set('validLocation', true);
    }

    if (startDate === '') {
      order.set('validStartDate', false);
    } else {
      order.set('validStartDate', true);
    }

    if ( order.validName &&
         order.validEmail &&
         order.validLocation &&
         order.validStartDate 
       ) {
      this.send('requestQuote', order);
    }
  }

  ,requestQuote(order) {
     if (order.items.length > 0) {
       order.set('emptyCartError', false);
       this.get('store').requestForQuote(order);
       this.transitionTo('success');
     } else {
       order.set('emptyCartError', true);
     }
   }
  }

 ,model() {
    return this.get('store').getOrder();
  }

 ,store: Ember.inject.service()
});

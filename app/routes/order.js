import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addMoreItems() {
      this.transitionTo('index');
    }

   ,decItem(item) {
      this.get('store').decrementItem(item);
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

   ,setOrderName(name) {
      this.get('store').setRenterName(name);
    }

   ,setOrderCompany(company) {
     this.get('store').setRenterCompany(company);
   }

   ,setOrderEmail(email) {
     this.get('store').setRenterEmail(email);
   }

   ,setOrderPhone(phone) {
     this.get('store').setRenterPhone(phone);
   }

   ,setOrderLocation(location) {
     this.get('store').setRenterLocation(location);
   }

   ,setOrderStartDate(startDate) {
     this.get('store').setRentalStartDate(startDate);
   }

   ,setOrderEndDate(endDate) {
     this.get('store').setRentalEndDate(endDate);
   }

  ,requestQuote(order) {
     if ( order.items.length > 0 ) {
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

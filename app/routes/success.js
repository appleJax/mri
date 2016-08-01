import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createNewOrder(order) {
      this.get('store').initializeNewOrder(order);
      this.transitionTo('index');
    }
  }

 ,model() {
    return this.get('store').getOrder();
  }

 ,store: Ember.inject.service()
});

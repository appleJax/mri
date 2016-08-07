import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateItem(item) {
      if (!this.model.order.items.includes(item) && Number(item.quantity) > 0) {
        item.set('ordered', true);
        this.model.order.items.pushObject(item);
      } else if (this.model.order.items.includes(item) && Number(item.quantity) === 0) {
        this.model.order.items.removeObject(item);
        item.set('ordered', false);
      }
    }
  }
});

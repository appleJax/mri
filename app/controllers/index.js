import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateItem(item) {
      if (item.quantity === '') {
        return;
      }

      let newQty = Math.ceil(Number(item.quantity));

      if (newQty <= 0) {
        item.set('quantity', 0);
      } else if (newQty > 2000) {
        item.set('quantity', 2000);
      } else {
        item.set('quantity', newQty);
      }

      if (!this.model.order.items.includes(item) && newQty > 0) {
        item.set('ordered', true);
        this.model.order.items.pushObject(item);
      } else if (this.model.order.items.includes(item) && newQty === 0) {
        this.model.order.items.removeObject(item);
        item.set('ordered', false);
      }
    }
  }
});

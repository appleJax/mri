import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span'

 ,totalItems: Ember.computed('items.[].quantity', function() {
    let items = this.get('items');
    
    if ( items.length === 0 ) {
      return 0;
    } else {
      return items.reduce(function(acc, item) {
        return Number(acc) + Number(item.quantity);
      }, 0);
    }
  })
});

import Ember from 'ember';

export default Ember.Object.extend({
  totalItems: Ember.computed('this.items.@each.quantity', function() {
    return this.items.reduce(function(acc, item) {
      return Number(acc) + Number(item.quantity);
    }, 0);
  })

 ,firstName: Ember.computed('this.name', function() {
    let firstName = this.name.split(' ');

    return firstName[0];
  })
});

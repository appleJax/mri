import Ember from 'ember';
import Category from 'mri/models/category';
import Subcategory from 'mri/models/subcategory';
import Item from 'mri/models/item';
import Order from 'mri/models/order';

const catalogueItems = [];
let newOrder = Order.create({
  renter: {
    name: ''
   ,company: ''
   ,email: ''
   ,phone: ''
  }
 ,location: ''
 ,startDate: ''
 ,endDate: ''
 ,items: []
});

let lineItem = Category.create({
  category: 'Tablets'
 ,expanded: true
 ,icon:  'fa fa-tablet'
 ,subcategories: [
    Subcategory.create({name: 'iPad'
    ,expanded: false
    ,items: [
       Item.create({description: 'iPad Pro', label: 'iPad Pro', quantity: 0, comments: ''})
      ,Item.create({description: 'iPad Air 2 (5th Generation)', label: 'iPad Air 2', quantity: 0, comments: ''})
      ,Item.create({description: 'iPad Air (4th Generation)', label: 'iPad Air', quantity: 0, comments: ''})
      ,Item.create({description: '3rd Generation iPad', label: '3rd Gen', quantity: 0, comments: ''})
      ,Item.create({description: '2nd Generation iPad', label: '2nd Gen', quantity: 0, comments: ''})
      ,Item.create({description: 'iPad Mini', label: 'iPad Mini', quantity: 0, comments: ''})
     ]
    })
   ,Subcategory.create({name: 'Samsung Galaxy Tab'
    ,expanded: false
    ,items: [
       Item.create({description: 'High-end Samsung Galaxy Tablet', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Samsung Galaxy Tablet', label: 'Low-end', quantity: 0, comments: ''})
     ]
    })
   ,Subcategory.create({name: 'Microsoft Surface Pro'
    ,expanded: false
    ,items: [
       Item.create({description: 'High-end Samsung Galaxy Tablet', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Samsung Galaxy Tablet', label: 'Low-end', quantity: 0, comments: ''})
     ]
    })
  ]
});

catalogueItems.pushObject(lineItem);

lineItem = Category.create({
  category: 'Laptops'
 ,expanded: true
 ,icon:  'fa fa-laptop'
 ,subcategories: [
    Subcategory.create({name: 'Apple'
    ,expanded: false
    ,items: [
       Item.create({description: '17" Macbook Pro' , label: '17" Macbook Pro', quantity: 0, comments: ''})
      ,Item.create({description: '15" Macbook Pro' , label: '15" Macbook Pro', quantity: 0, comments: ''})
      ,Item.create({description: '13" Macbook Air' , label: '13" Macbook Air', quantity: 0, comments: ''})
      ,Item.create({description: '11" Macbook Air' , label: '11" Macbook Air', quantity: 0, comments: ''})
     ]
    })
   ,Subcategory.create({name: 'Dell'
    ,expanded: false
    ,items: [
       Item.create({description: 'High-end Dell Laptop', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Dell Laptop', label: 'Low-end', quantity: 0, comments: ''})
     ]
    })
   ,Subcategory.create({name: 'HP'
    ,expanded: false
    ,items: [
       Item.create({description: 'High-end HP Laptop', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end HP Laptop', label: 'Low-end', quantity: 0, comments: ''})
     ]
    })
   ,Subcategory.create({name: 'Lenovo'
    ,expanded: false
    ,items: [
       Item.create({description: 'High-end Lenovo Laptop', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Lenovo Laptop', label: 'Low-end', quantity: 0, comments: ''})
     ]
    })
  ]
});

catalogueItems.pushObject(lineItem);

lineItem = Category.create({
  category: 'Desktops'
 ,expanded: true
 ,icon: 'fa fa-desktop'
 ,subcategories: [
    Subcategory.create({name: 'Mac Pro Tower'
    ,expanded: false
    ,items: [
       Item.create({description: 'High-end Mac Pro Tower', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Mac Pro Tower', label: 'Low-end', quantity: 0, comments: ''})
     ]
    })
   ,Subcategory.create({name: 'iMac'
    ,expanded: false
    ,items: [
       Item.create({description: '27" iMac (High-end)', label: '27" iMac (High-end)', quantity: 0, comments: ''})
      ,Item.create({description: '27" iMac (Low-end)', label: '27" iMac (Low-end)', quantity: 0, comments: ''})
      ,Item.create({description: '21" iMac (High-end)', label: '21" iMac (High-end)', quantity: 0, comments: ''})
      ,Item.create({description: '21" iMac (Low-end)', label: '21" iMac (Low-end)', quantity: 0, comments: ''})
     ]
    })
   ,Subcategory.create({name: 'Mac Mini'
    ,expanded: false
    ,items: [
       Item.create({description: 'High-end Mac Mini', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Mac Mini', label: 'Low-end', quantity: 0, comments: ''})
     ]
    })
   ,Subcategory.create({name: 'Windows PC'
    ,expanded: false
    ,items: [
       Item.create({description: 'High-end Windows PC Desktop', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Windows PC Desktop', label: 'Low-end', quantity: 0, comments: ''})
     ]
    })
  ]
});

catalogueItems.pushObject(lineItem);

lineItem = Category.create({
  category: ''
 ,icon:  ''
 ,subcategories: []
});

export default Ember.Service.extend({
  getCatalogue() {
    return catalogueItems;
  }  

 ,expandSection(section) {
    section.toggleProperty('expanded');
  }

 ,incrementItem(item) {
    item.incrementProperty('quantity');
    if (!newOrder.items.includes(item)) {
      this.addOrderItem(item);
    }
 }

 ,decrementItem(item) {
    if (item.quantity === 0) {
      return;
    }
    item.decrementProperty('quantity');
    if (item.quantity === 0) {
      this.removeOrderItem(item);
    }
  }

 ,setItemQuantity(item, qty) {
    console.log(item.quantity, qty);
    if (item.quantity === 0) {
      item.set('quantity', qty);
      if (item.quantity > 0) {
        item.set('ordered', true);
        newOrder.items.pushObject(item);
        return;
      } else {
        return;
      }
    }
    item.set('quantity', qty);
    if (item.quantity === 0) {
      item.set('ordered', false);
      newOrder.get('items').removeObject(item);
    }
  }

 ,addOrderItem(item) {
    if (item.quantity > 0) {
      newOrder.items.pushObject(item);
      item.set('ordered', true);
    }
 } 

 ,removeOrderItem(item) {
    newOrder.get('items').removeObject(item);
    item.set('quantity', 0);
    item.set('ordered', false);
  }

 ,getOrder() {
    return newOrder;
  }

 ,requestForQuote(order) {
    // Fire off email with the order
  }

 ,initializeNewOrder(order) {
    catalogueItems.forEach( function(category) {
      category.set('expanded', true);
      category.subcategories.forEach( function(subcat) { 
        subcat.set('expanded', false);
      });
    });

    order.items.forEach(function(item) { 
      item.set('quantity', 0);
      item.set('ordered', false);
    });

    newOrder = Order.create({
      renter: {
        name: ''
       ,company: ''
       ,email: ''
       ,phone: ''
      }
     ,location: ''
     ,startDate: ''
     ,endDate: ''
     ,items: []
    });
  }
});

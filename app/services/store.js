import Ember from 'ember';
import Category from 'mri/models/category';
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
 ,icon:  'fa fa-tablet'
 ,subcategories: [
    {name: 'iPad'
    ,items: [
       Item.create({description: 'iPad Pro', label: 'iPad Pro', quantity: 0, comments: ''})
      ,Item.create({description: 'iPad Air 2 (5th Generation)', label: 'iPad Air 2', quantity: 0, comments: ''})
      ,Item.create({description: 'iPad Air (4th Generation)', label: 'iPad Air', quantity: 0, comments: ''})
      ,Item.create({description: '3rd Generation iPad', label: '3rd Gen', quantity: 0, comments: ''})
      ,Item.create({description: '2nd Generation iPad', label: '2nd Gen', quantity: 0, comments: ''})
      ,Item.create({description: 'iPad Mini', label: 'iPad Mini', quantity: 0, comments: ''})
     ]
    }
   ,{name: 'Samsung Galaxy Tab'
    ,items: [
       Item.create({description: 'High-end Samsung Galaxy Tablet', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Samsung Galaxy Tablet', label: 'Low-end', quantity: 0, comments: ''})
     ]
    }
   ,{name: 'Microsoft Surface Pro'
    ,items: [
       Item.create({description: 'High-end Samsung Galaxy Tablet', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Samsung Galaxy Tablet', label: 'Low-end', quantity: 0, comments: ''})
     ]
    }
  ]
});

catalogueItems.pushObject(lineItem);

lineItem = Category.create({
  category: 'Laptops'
 ,icon:  'fa fa-laptop'
 ,subcategories: [
    {name: 'Apple'
    ,items: [
       Item.create({description: '17" Macbook Pro' , label: '17" Macbook Pro', quantity: 0, comments: ''})
      ,Item.create({description: '15" Macbook Pro' , label: '15" Macbook Pro', quantity: 0, comments: ''})
      ,Item.create({description: '13" Macbook Air' , label: '13" Macbook Air', quantity: 0, comments: ''})
      ,Item.create({description: '11" Macbook Air' , label: '11" Macbook Air', quantity: 0, comments: ''})
     ]
    }
   ,{name: 'Dell'
    ,items: [
       Item.create({description: 'High-end Dell Laptop', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Dell Laptop', label: 'Low-end', quantity: 0, comments: ''})
     ]
    }
   ,{name: 'HP'
    ,items: [
       Item.create({description: 'High-end HP Laptop', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end HP Laptop', label: 'Low-end', quantity: 0, comments: ''})
     ]
    }
   ,{name: 'Lenovo'
    ,items: [
       Item.create({description: 'High-end Lenovo Laptop', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Lenovo Laptop', label: 'Low-end', quantity: 0, comments: ''})
     ]
    }
  ]
});

catalogueItems.pushObject(lineItem);

lineItem = Category.create({
  category: 'Desktops'
 ,icon: 'fa fa-desktop'
 ,subcategories: [
    {name: 'Mac Pro Tower'
    ,items: [
       Item.create({description: 'High-end Mac Pro Tower', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Mac Pro Tower', label: 'Low-end', quantity: 0, comments: ''})
     ]
    }
   ,{name: 'iMac'
    ,items: [
       Item.create({description: '27" iMac (High-end)', label: '27" iMac (High-end)', quantity: 0, comments: ''})
      ,Item.create({description: '27" iMac (Low-end)', label: '27" iMac (Low-end)', quantity: 0, comments: ''})
      ,Item.create({description: '21.5" iMac (High-end)', label: '21.5" iMac (High-end)', quantity: 0, comments: ''})
      ,Item.create({description: '21.5" iMac (Low-end)', label: '21.5" iMac (Low-end)', quantity: 0, comments: ''})
     ]
    }
   ,{name: 'Mac Mini'
    ,items: [
       Item.create({description: 'High-end Mac Mini', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Mac Mini', label: 'Low-end', quantity: 0, comments: ''})
     ]
    }
   ,{name: 'Windows PC'
    ,items: [
       Item.create({description: 'High-end Windows PC Desktop', label: 'High-end', quantity: 0, comments: ''})
      ,Item.create({description: 'Low-end Windows PC Desktop', label: 'Low-end', quantity: 0, comments: ''})
     ]
    }
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

 ,incrementItem(item) {
    item.incrementProperty('quantity');
  }

 ,decrementItem(item) {
    if (item.quantity === 0) {
      return;
    }
    item.decrementProperty('quantity');
  }

 ,setItemQuantity(item, qty) {
    item.set('quantity', qty);
  }

 ,addOrderItem(item) {
    if (item.quantity > 0) {
      newOrder.items.pushObject(item);
    }
 } 

 ,removeOrderItem(item) {
    newOrder.get('items').removeObject(item);
    item.set('quantity', 0)
  }

 ,getOrder() {
    return newOrder;
  }

 ,setRenterName(name) {
    newOrder.renter.set('name', name);
  }

 ,setRenterCompany(company) {
    newOrder.renter.set('company', company);
  }

 ,setRenterEmail(email) {
    newOrder.renter.set('email', email);
  }

 ,setRenterPhone(phone) {
    newOrder.renter.set('phone', phone);
  }

 ,setRenterLocation(location) {
    newOrder.set('location', location);
  }

 ,requestForQuote(order) {
    // Fire off email with the order
  }

 ,initializeNewOrder(order) {
    order.items.forEach(function(item) { 
      item.set('quantity', 0);
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

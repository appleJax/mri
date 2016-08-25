import config from '../config/environment';
import Ember from 'ember';
import Category from 'mri/models/category';
import Subcategory from 'mri/models/subcategory';
import Item from 'mri/models/item';
import Order from 'mri/models/order';

const catalogueItems = [];
let newOrder = Order.create({
  name: ''
 ,validName: true
 ,company: ''
 ,email: ''
 ,validEmail: true
 ,phone: ''
 ,location: ''
 ,validLocation: true
 ,startDate: ''
 ,validStartDate: true
 ,endDate: ''
 ,technician: false
 ,details: ''
 ,items: []
 ,emptyCartError: false
});

let lineItem = Category.create({
  category: 'Tablets'
 ,expanded: true
 ,icon: 'fa fa-tablet'
 ,subcategories: [
    Subcategory.create({name: 'iPad'
     ,expanded: false
     ,items: [
        Item.create({description: 'iPad Pro', label: 'iPad Pro', quantity: 0})
       ,Item.create({description: 'iPad Air 2 (5th Generation)', label: 'iPad Air 2', quantity: 0})
       ,Item.create({description: 'iPad Air (4th Generation)', label: 'iPad Air', quantity: 0})
       ,Item.create({description: '3rd Generation iPad', label: '3rd Gen', quantity: 0})
       ,Item.create({description: '2nd Generation iPad', label: '2nd Gen', quantity: 0})
       ,Item.create({description: 'iPad Mini', label: 'iPad Mini', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Samsung Galaxy Tab'
     ,expanded: false
     ,items: [
        Item.create({description: 'High-end Samsung Galaxy Tablet', label: 'High-end', quantity: 0})
       ,Item.create({description: 'Low-end Samsung Galaxy Tablet', label: 'Low-end', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Microsoft Surface Pro'
     ,expanded: false
     ,items: [
        Item.create({description: 'High-end Samsung Galaxy Tablet', label: 'High-end', quantity: 0})
       ,Item.create({description: 'Low-end Samsung Galaxy Tablet', label: 'Low-end', quantity: 0})
      ]
    })
  ]
});

catalogueItems.pushObject(lineItem);

lineItem = Category.create({
  category: 'Laptops'
 ,expanded: true
 ,icon: 'fa fa-laptop'
 ,subcategories: [
    Subcategory.create({name: 'Apple'
     ,expanded: false
     ,items: [
        Item.create({description: '17" Macbook Pro' , label: '17" Macbook Pro', quantity: 0})
       ,Item.create({description: '15" Macbook Pro' , label: '15" Macbook Pro', quantity: 0})
       ,Item.create({description: '13" Macbook Air' , label: '13" Macbook Air', quantity: 0})
       ,Item.create({description: '11" Macbook Air' , label: '11" Macbook Air', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Dell'
     ,expanded: false
     ,items: [
        Item.create({description: 'High-end Dell Laptop', label: 'High-end', quantity: 0})
       ,Item.create({description: 'Low-end Dell Laptop', label: 'Low-end', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'HP'
     ,expanded: false
     ,items: [
        Item.create({description: 'High-end HP Laptop', label: 'High-end', quantity: 0})
       ,Item.create({description: 'Low-end HP Laptop', label: 'Low-end', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Lenovo'
     ,expanded: false
     ,items: [
        Item.create({description: 'High-end Lenovo Laptop', label: 'High-end', quantity: 0})
       ,Item.create({description: 'Low-end Lenovo Laptop', label: 'Low-end', quantity: 0})
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
        Item.create({description: 'High-end Mac Pro Tower', label: 'High-end', quantity: 0})
       ,Item.create({description: 'Low-end Mac Pro Tower', label: 'Low-end', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'iMac'
     ,expanded: false
     ,items: [
        Item.create({description: '27" iMac (High-end)', label: '27" iMac (High-end)', quantity: 0})
       ,Item.create({description: '27" iMac (Low-end)', label: '27" iMac (Low-end)', quantity: 0})
       ,Item.create({description: '21" iMac (High-end)', label: '21" iMac (High-end)', quantity: 0})
       ,Item.create({description: '21" iMac (Low-end)', label: '21" iMac (Low-end)', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Mac Mini'
     ,expanded: false
     ,items: [
        Item.create({description: 'High-end Mac Mini', label: 'High-end', quantity: 0})
       ,Item.create({description: 'Low-end Mac Mini', label: 'Low-end', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Windows PC'
     ,expanded: false
     ,items: [
        Item.create({description: 'High-end Windows PC Desktop', label: 'High-end', quantity: 0})
       ,Item.create({description: 'Low-end Windows PC Desktop', label: 'Low-end', quantity: 0})
      ]
    })
  ]
});

catalogueItems.pushObject(lineItem);

lineItem = Category.create({
  category: 'Audio'
 ,expanded: true
 ,icon: 'fa fa-microphone'
 ,subcategories: [
    Subcategory.create({name: 'Microphones'
     ,expanded: false
     ,items: [
        Item.create({description: 'Wireless Handheld Microphone', label: 'Wireless Handheld', quantity: 0})
       ,Item.create({description: 'Wireless Lavalier Microphone', label: 'Wireless Lav', quantity: 0})
       ,Item.create({description: 'Gooseneck Podium Microphone', label: 'Gooseneck Mic', quantity: 0})
       ,Item.create({description: 'Wired Microphone', label: 'Wired Mic', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Speakers'
     ,expanded: false
     ,items: [
        Item.create({description: 'Large Audio Speaker', label: 'Large Speaker (12\")', quantity: 0})
       ,Item.create({description: 'Small Audio Speaker', label: 'Small Speaker (6\")', quantity: 0})
       ,Item.create({description: 'Computer Speakers', label: 'Computer Speakers', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Audio Gear'
     ,expanded: false
     ,items: [
        Item.create({description: '16-Channel Audio Mixer', label: '16-Channel Mixer', quantity: 0})
       ,Item.create({description: '8-Channel Audio Mixer', label: '8-Channel Mixer', quantity: 0})
       ,Item.create({description: '4-Channel Audio Mixer', label: '4-Channel Mixer', quantity: 0})
       ,Item.create({description: '31-Band Graphic Equalizer', label: 'Graphic EQ', quantity: 0})
       ,Item.create({description: 'Audio Recording Device', label: 'Audio Recorder', quantity: 0})
       ,Item.create({description: 'Headphones', label: 'Headphones', quantity: 0})
       ,Item.create({description: 'Walkie-Talkie 2-Way Radios', label: 'Walkie-Talkies', quantity: 0})
      ]
    })
  ]
});

catalogueItems.pushObject(lineItem);

lineItem = Category.create({
  category: 'Visual'
 ,expanded: true
 ,icon: 'fa fa-film'
 ,subcategories: [
    Subcategory.create({name: 'Digital Displays'
     ,expanded: false
     ,items: [
        Item.create({description: 'Video Wall', label: 'Video Wall', quantity: 0})
       ,Item.create({description: '70\"-80\" LED Digital Monitor', label: 'Large (70\"-80\")', quantity: 0})
       ,Item.create({description: '70\"-80\" 3D LED Digital Monitor', label: 'Large 3D', quantity: 0})
       ,Item.create({description: '50\"-65\" LED Digital Monitor', label: 'Medium (50\"-65\")', quantity: 0})
       ,Item.create({description: '46\" Digital Touchscreen Monitor', label: 'Medium Touchscreen', quantity: 0})
       ,Item.create({description: '32\"-42\" LED Digital Monitor', label: 'Small (32\"-42\")', quantity: 0})
       ,Item.create({description: '17\"-21\" Computer LCD Monitor', label: 'Computer LCD (17\"-21\")', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Projectors'
     ,expanded: false
     ,items: [
        Item.create({description: '4K-5K Lumens High-Powered Projector', label: 'High-End (4K-5K Lumens)', quantity: 0})
       ,Item.create({description: '2K-3.5K Lumens Low-Powered Prejector', label: 'Low-End (2K-3.5K Lumens)', quantity: 0})
      ]
    })
    ,Subcategory.create({name: 'Projection Screens'
     ,expanded: false
     ,items: [
        Item.create({description: '9\'x12\' Fast Fold Screen w/ Black Drapes', label: '9\'x12\' w/ Drapes', quantity: 0})
       ,Item.create({description: '7.5\'x10\' Fast Fold Screen w/ Black Drapes', label: '7.5\'x10\' w/ Drapes', quantity: 0})
       ,Item.create({description: '8\' Tripod Projection Screen', label: '8\' Screen', quantity: 0})
       ,Item.create({description: '6\' Tripod Projection Screen', label: '6\' Screen', quantity: 0})
      ]
    })
    ,Subcategory.create({name: 'Visual Gear'
     ,expanded: false
     ,items: [
        Item.create({description: '1x4 HDMI Splitter', label: 'HDMI Splitter', quantity: 0})
       ,Item.create({description: '1x4 VGA Splitter', label: 'VGA Splitter', quantity: 0})
       ,Item.create({description: '4x1 VGA Switcher', label: 'VGA Switcher', quantity: 0})
       ,Item.create({description: 'DVD/Blu-ray/USB Media Player', label: 'Media Player', quantity: 0})
      ]
    })
]
});

catalogueItems.pushObject(lineItem);

lineItem = Category.create({
  category: 'Office Equipment'
 ,expanded: true
 ,icon: 'fa fa-print'
 ,subcategories: [
    Subcategory.create({name: 'Copier/Scanners'
     ,expanded: false
     ,items: [
        Item.create({description: 'High-Output Color Copier/Printer/Scanner', label: 'High-Output Color', quantity: 0})
       ,Item.create({description: 'Table-Top Color Copier/Printer/Scanner', label: 'Table-Top Color', quantity: 0})
       ,Item.create({description: 'High-Output B/W Copier/Printer/Scanner', label: 'High-Output B/W', quantity: 0})
       ,Item.create({description: 'Table-Top Color Copier/Printer/Scanner', label: 'Table-Top B/W', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Printers'
     ,expanded: false
     ,items: [
        Item.create({description: 'HP3525 Color Printer', label: 'HP3525 Color', quantity: 0})
       ,Item.create({description: 'HP4350 B/W Printer', label: 'HP4350 B/W', quantity: 0})
      ]
    })
   ,Subcategory.create({name: 'Whiteboards/Easels'
     ,expanded: false
     ,items: [
        Item.create({description: 'Large Whiteboard w/ Dry Erase Markers', label: 'Large Whiteboard', quantity: 0})
       ,Item.create({description: 'Small Whiteboard w/ Dry Erase Markers', label: 'Small Whiteboard', quantity: 0})
       ,Item.create({description: 'Easel w/ Flipchart and Markers', label: 'Easel w/ Flipchart', quantity: 0})
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
    if (Number(item.quantity) === 0) {
      if (newOrder.items.includes(item)) {
        this.removeOrderItem(item);
      }
      return;
    }
    item.decrementProperty('quantity');
    if (Number(item.quantity) === 0) {
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

 ,toggleTech() {
    newOrder.toggleProperty('technician');
  }

 ,requestForQuote(order) {
    let orderString = JSON.stringify(order);
    Ember.$.ajax({
      method: "POST"
     ,contentType: "application/json"
     ,url: config.APP.API_ENDPOINT + "/request-quote"
     ,data: orderString
    });
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
      name: ''
     ,validName: true
     ,company: ''
     ,email: ''
     ,validEmail: true
     ,phone: ''
     ,location: ''
     ,validLocation: true
     ,startDate: ''
     ,validStartDate: true
     ,endDate: ''
     ,technician: false
     ,details: ''
     ,items: []
     ,emptyCartError: false
    });
  }
});

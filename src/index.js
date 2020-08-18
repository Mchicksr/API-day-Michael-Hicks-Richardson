import $ from 'jquery';
import store from './store';


//import 'normalize.css';

import api from './api';
import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();

      const item = store.items[0];
      console.log('current name: ' + item.name);
      store.findAndUpdate(item.id, { name: 'barbaz' });
      console.log('new name: ' + item.name);
    });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

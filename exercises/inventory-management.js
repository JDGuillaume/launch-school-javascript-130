class Item {
  constructor(name, category, quantity) {
    if (name.match(/[a-z]/gi).length >= 5) {
      this.name = name;
    } else throw new Error('Not a valid name');

    if (category.match(/\b\w+\b/g).length === 1 && category.length >= 5) {
      this.category = category;
    } else throw new Error('Not a valid category name.');

    if (quantity !== undefined) {
      this.quantity = quantity;
    } else throw new Error('No quantity provided.');

    this.sku = this._generateSku();
  }

  _generateSku() {
    const name = this.name.replace(/' '/g, '');
    const category = this.category;
    return name.slice(0, 3).toUpperCase() + category.slice(0, 2).toUpperCase();
  }
}

class ManagerOfItems {
  constructor() {
    this.items = [];
  }

  _findItem(sku) {
    return this.items.filter(item => item.sku === sku)[0];
  }

  create(name, quantity, category) {
    try {
      let item = new Item(name, quantity, category);
      this.items.push(item);
      return item;
    } catch {
      return false;
    }
  }

  update(sku, updateObject) {
    let selectedItem = this._findItem(sku);
    Object.assign(selectedItem, updateObject);
  }

  delete(sku) {
    let selectedItemIndex = this.items.findIndex(item => item.sku === sku);
    this.items.splice(selectedItemIndex, 1);
  }

  items() {
    return this.items;
  }

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  }

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
}

class ManagerOfReports {
  constructor(ItemManager) {
    this.items = ItemManager;
  }

  createReporter(sku) {
    const selectedItem = this.items._findItem(sku);

    return {
      itemInfo: function() {
        for (let property in selectedItem) {
          console.log(`${property}: ${selectedItem[property]}`);
        }
      },
    };
  }

  reportInStock() {
    return this.items
      .inStock()
      .map(item => item.name)
      .join(', ');
  }
}

let ItemManager = new ManagerOfItems();

ItemManager.create('basket ball', 'sports', 0); // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5); // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3); // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3); // valid item

// console.log(ItemManager.items);
let ReportManager = new ManagerOfReports(ItemManager);

ItemManager.update('SOCSP', {quantity: 0});

// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());

// football,kitchen pot
console.log(ReportManager.reportInStock());

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');

// returns list the remaining 3 valid items (soccer ball is removed)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', {quantity: 10});
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

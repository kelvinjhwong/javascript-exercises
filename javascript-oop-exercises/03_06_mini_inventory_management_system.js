var ItemCreator = (function () {
  function isValidItemName(itemName) {
    return itemName !== undefined && itemName.replace(/\s/g, '').length >= 5;
  }

  function isValidCategory(category) {
    return category !== undefined && !/\s/.test(category) && category.length >= 5;
  }

  function isValidQuantity(quantity) {
    return quantity !== undefined;
  }

  function generateSKUCode(itemName, category) {
    var itemNameWithoutSpaces = itemName.replace(/\s/g, '');
    var categoryWithoutSpaces = category.replace(/\s/g, '');
    return itemNameWithoutSpaces.slice(0, 3).toUpperCase() +
           categoryWithoutSpaces.slice(0, 2).toUpperCase();
  }

  return function(itemName, category, quantity) {
    if (
      isValidItemName(itemName)
      && isValidCategory(category)
      && isValidQuantity(quantity)
    ) {
      this.skuCode = generateSKUCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

var ItemManager = (function () {
  return {
    items: [],

    getItem: function(skuCode) {
      return this.items.find((item) => item.skuCode === skuCode);
    },

    create: function (itemName, category, quantity) {
      var item = new ItemCreator(itemName, category, quantity);

      if (item.notValid) {
        return false;
      } else {
        this.items.push(item);
      }
    },

    update: function (skuCode, newProperties) {
      var item = this.getItem(skuCode);

      if (item !== undefined) {
        Object.assign(this.getItem(skuCode), newProperties);
      }
    },

    delete: function (skuCode) {
      var itemIndex;

      this.items.find((item, index) => {
        if (item.skuCode === skuCode) {
          itemIndex = index;
          return true;
        } else {
          return false;
        }
      });

      this.items.splice(itemIndex, 1);
    },

    inStock: function () {
      return this.items.filter((item) => item.quantity > 0);
    },

    itemsInCategory: function (category) {
      return this.items.filter((item) => item.category === category);
    },
  };
})();

var ReportManager = {
  init: function (itemManager) {
    this.items = itemManager;
  },

  createReporter: function (skuCode) {
    var itemForReporter = this.items.getItem(skuCode);

    return {
      itemInfo: function () {
        var propName;

        for (propName in itemForReporter) {
          console.log(`${propName}: ${itemForReporter[propName]}`);
        }
      },
    };
  },

  reportInStock: function () {
    var itemNames = this.items.inStock().map((item) => item.itemName);
    console.log(itemNames.join(','));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'spors');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

console.log('---');

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

console.log('---');

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot

console.log('---');

ReportManager.reportInStock();
// logs football,kitchen pot

console.log('---');

console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football

console.log('---');

ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

console.log('---');

var kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

console.log('---');

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

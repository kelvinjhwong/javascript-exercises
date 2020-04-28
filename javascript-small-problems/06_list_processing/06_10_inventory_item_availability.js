function isItemAvailable(inventoryItem, transactions) {
  var quantityRemaining = transactionsFor(inventoryItem, transactions)
        .reduce(function (quantityRemaining, transaction) {
          if (transaction.movement === 'in') {
            return quantityRemaining + transaction.quantity;
          } else if (transaction.movement === 'out') {
            return quantityRemaining - transaction.quanityt;
          }
        }, 0);

  return quantityRemaining > 0;
}

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter((transaction) => transaction.id === inventoryItem);
}

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

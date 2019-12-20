function Store() {
  this.items = [];
}

Store.prototype.addItems = function (newItems) {
  const pushToList = (item) => {
    this.items.push(item);
  };

  newItems.forEach(pushToList);
};

const myStore = new Store();

myStore.addItems([1, 2, 3, 4]);

console.log(myStore.items);

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    function compareNumbers(a, b) {
      return a - b;
    }
    this.items.sort(compareNumbers);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => Math.max(a, b), -Infinity);
    } else {
      throw new Error('Empty SortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => Math.min(a, b), +Infinity);
    } else {
      throw new Error('Empty SortedList');
    }
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => a + b) / this.items.length;
    } else {
      throw new Error('Empty SortedList');
    }
  }
}

module.exports = SortedList;

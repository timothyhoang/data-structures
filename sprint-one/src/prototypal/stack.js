var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.numElements = 0;
  someInstance.storage = {};
  
  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.numElements++] = value;
  },
  
  pop: function () {
    if (this.numElements) {
      return this.storage[--this.numElements];
    }
  },
  
  size: function () {
    return this.numElements;
  }
};



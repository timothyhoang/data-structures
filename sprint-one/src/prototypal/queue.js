var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.numElements = 0;
  someInstance.firstIndex = 0;
  someInstance.lastIndex = 0;
  
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.numElements++;
    this.storage[this.lastIndex++] = value;
  },
  
  dequeue: function () {
    if (this.numElements) {
      this.numElements--;
      return this.storage[this.firstIndex++];
    }
  },
  
  size: function () {
    return this.numElements;
  }
};



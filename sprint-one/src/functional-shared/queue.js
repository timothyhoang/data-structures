var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    numElements: 0,
    storage: {},
    head: 0
  };
  
  _.extend(someInstance, queueMethods);
  
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.head + this.numElements++] = value;
  },
  
  dequeue: function() {
    if (this.numElements) {
      this.numElements--;
      return this.storage[this.head++];
    }
  },
  
  size: function() {
    return this.numElements;
  }
};



var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numElements = 0;
  var head = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[head + numElements++] = value;
  };

  someInstance.dequeue = function() {
    if (numElements) {
      numElements--;
      return storage[head++];
    }
  };

  someInstance.size = function() {
    return numElements;
  };

  return someInstance;
};

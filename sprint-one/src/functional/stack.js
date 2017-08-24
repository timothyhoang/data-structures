var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numElements = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[numElements++] = value;
  };

  someInstance.pop = function() {
    if (numElements) {
      return storage[--numElements];
    }
  };

  someInstance.size = function() {
    return numElements;
  };

  return someInstance;
};

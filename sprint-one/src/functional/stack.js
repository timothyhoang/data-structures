var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[++someInstance.count] = value;
  };

  someInstance.pop = function() {
    if (someInstance.count) {
      var value = someInstance[someInstance.count];
      delete someInstance[someInstance.count--];

      return value;
    } else {
      return undefined;
    }
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};

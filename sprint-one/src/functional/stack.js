var Stack = function() {
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[++count] = value;
  };

  someInstance.pop = function() {
    if (count) {
      var value = someInstance[count];
      delete someInstance[count--];

      return value;
    } else {
      return undefined;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

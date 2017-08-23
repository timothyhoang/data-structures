var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var endQueueIndex = 0;
  var count = 0;
  var begQueueIndex = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[++endQueueIndex] = value;
    count++;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

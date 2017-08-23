var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {count: 0, storage: {}};

  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

var extend = function (destination, source) {
  for (var key in source) {
    destination[key] = source[key];
  }
}

stackMethods.push = function(value) {
  this.storage[++this.count] = value;
}

stackMethods.pop = function () {
  if (this.count) {
    var value = this.storage[this.count];
    delete this.storage[this.count--];

    return value;
  } else {
    return undefined;
  }
}

stackMethods.size = function() {
  return this.count;
}



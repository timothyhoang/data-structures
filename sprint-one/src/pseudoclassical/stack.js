var Stack = function() {
  this.numElements = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.numElements++] = value;
};

Stack.prototype.pop = function() {
  return (this.numElements) ? this.storage[--this.numElements] : undefined;
};

Stack.prototype.size = function() {
  return this.numElements;
};
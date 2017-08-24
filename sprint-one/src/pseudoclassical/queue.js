var Queue = function() {
  this.numElements = 0;
  this.storage = {};
  this.head = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.head + this.numElements++] = value;
};

Queue.prototype.dequeue = function () {
  if (this.numElements) {
    this.numElements--;
    return this.storage[this.head++];
  }
};

Queue.prototype.size = function () {
  return this.numElements;
};

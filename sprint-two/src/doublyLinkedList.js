var DoublyLinkedList = function() {
  this.sentinel = new DLNode(null);
  this.size = 0;
};

DoublyLinkedList.prototype.addToHead = function(value) {
  if (this.size === 0) {
    var node = new DLNode(value, this.sentinel, this.sentinel);
    this.sentinel.next = node;
    this.sentinel.prev = node;
  } else {
    var head = this.sentinel.next;
    var node = new DLNode(value, this.sentinel, head);
    this.sentinel.next = node;
    head.prev = node;
  }
  
  this.size++;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  if (this.size === 0) {
    var node = new DLNode(value, this.sentinel, this.sentinel);
    this.sentinel.next = node;
    this.sentinel.prev = node;
  } else {
    var tail = this.sentinel.prev;
    var node = new DLNode(value, tail, this.sentinel);
    this.sentinel.prev = node;
    tail.next = node;
  }
  
  this.size++;
};

DoublyLinkedList.prototype.removeHead = function() {
  var firstValue = this.sentinel.next.value;
  var secondToFirst = this.sentinel.next.next;
  
  this.sentinel.next = secondToFirst;
  secondToFirst.prev = this.sentinel;
  
  this.size = Math.max(0, --this.size);
  
  return firstValue;
};

DoublyLinkedList.prototype.removeTail = function() {
  var lastValue = this.sentinel.prev.value;
  var secondToLast = this.sentinel.prev.prev;
  
  this.sentinel.prev = secondToLast;
  secondToLast.next = this.sentinel;
  
  this.size = Math.max(0, --this.size);
  
  return lastValue;
};

DoublyLinkedList.prototype.contains = function(value) {
  var currentDLNode = this.sentinel.next;
  
  while (currentDLNode !== this.sentinel) {
    if (currentDLNode.value === value) {
      return true;
    }
    currentDLNode = currentDLNode.next;
  }
  
  return false;
};

DoublyLinkedList.prototype.getHead = function() {
  return (this.size === 0) ? null : this.sentinel.next.value;
};

DoublyLinkedList.prototype.getTail = function() {
  return (this.size === 0) ? null : this.sentinel.prev.value;
};

var DLNode = function(value, prev, next) {
  this.value = value;
  this.prev = prev || this;
  this.next = next || this;
};
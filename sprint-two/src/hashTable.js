

var HashTable = function() {
  this._numElements = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this._storage.get(index)) {
    this._storage.get(index).set(k, v);
    this._numElements++;
    if (this._numElements === this._limit - 1) {
      this.resize(2 * this._limit);
    }
  } else {
    var map = new Map([[k, v]]);
    this._storage.set(index, map);
    this._numElements++;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    return this._storage.get(index).get(k);
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this._storage.get(index) && this._storage.get(index).has(k)) {
    this._storage.get(index).delete(k);
    this._numElements--;
    
    var loadFactor = Math.ceil(this._limit / 8);
    if (this._numElements <= loadFactor) {
      this.resize(Math.ceil(this._limit / 2));
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  var newHashTable = new HashTable();
  newHashTable._limit = newLimit;
  newHashTable._storage = LimitedArray(newLimit);
  
  this._storage.each(function(map) {
    if (map) {
      for (let entry of map.entries()) {
        newHashTable.insert(entry[0], entry[1]);
      }
    }
  });
  
  this._limit = newHashTable._limit;
  this._storage = newHashTable._storage;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



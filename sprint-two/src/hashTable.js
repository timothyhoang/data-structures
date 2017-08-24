

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this._storage.get(index)) {
    this._storage.get(index).set(k, v);
  } else {
    var map = new Map([[k, v]]);
    this._storage.set(index, map);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  return this._storage.get(index).get(k);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  this._storage.get(index).delete(k);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



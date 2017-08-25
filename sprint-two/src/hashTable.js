

var HashTable = function() {
  this._numElements = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    
  if (this._storage.get(index)) {
    if (this.retrieve(k)) {
      this.remove(k);
    }  
    this._storage.get(index).push([JSON.stringify(k), v]);
  } else {
    var bucket = [[JSON.stringify(k), v]];
    this._storage.set(index, bucket);
  }
  
  this._numElements++;
  
  if (this._numElements === Math.ceil(.75 * this._limit)) {
    this.resize(2 * this._limit);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var bucketIndex = this.findBucketIndex(k);
  
  if (bucket && bucketIndex !== -1) {
    return bucket[bucketIndex][1];
  }
};

HashTable.prototype.findBucketIndex = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if (bucket) {
    var indexOfKey = bucket.findIndex(function(entry) {
      return entry[0] === JSON.stringify(k);
    });
  }
    
  return indexOfKey;  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var bucketIndex = this.findBucketIndex(k);
  
  if (bucket && bucketIndex !== -1) {
    this._storage.get(index).splice(bucketIndex, 1);
    this._numElements--;
    
    var loadFactor = Math.ceil(this._limit / 4);
    
    if (this._numElements === loadFactor) {
      this.resize(Math.ceil(this._limit / 2));
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  if (newLimit >= 8) {
    var newHashTable = new HashTable();
    newHashTable._limit = newLimit;
    newHashTable._storage = LimitedArray(newLimit);
    
    this._storage.each(function(bucket) {
      if (bucket) {
        for (let entry of bucket) {
          newHashTable.insert(JSON.parse(entry[0]), entry[1]);
        }
      }
    });
    
    this._limit = newHashTable._limit;
    this._storage = newHashTable._storage;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[JSON.stringify(item)] = item;
};

setPrototype.contains = function(item) {
  return this._storage[JSON.stringify(item)] === item;
};

setPrototype.remove = function(item) {
  delete this._storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

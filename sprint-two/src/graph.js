

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edgeMatrix = [];
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
  this.edgeMatrix.push([]);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertices.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = _.indexOf(this.vertices, node);
  
  for (var edges of this.edgeMatrix) {
    edges.splice(index, 1);
  }
  
  this.edgeMatrix.splice(index, 1);
  this.vertices.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromIndex = _.indexOf(this.vertices, fromNode);
  var toIndex = _.indexOf(this.vertices, toNode);
  
  if (fromIndex === -1 || toIndex === -1) {
    return false;
  } 
  
  return Boolean(this.edgeMatrix[fromIndex][toIndex] || this.edgeMatrix[toIndex][fromIndex]);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIndex = _.indexOf(this.vertices, fromNode);
  var toIndex = _.indexOf(this.vertices, toNode);
  
  this.edgeMatrix[fromIndex][toIndex] = true;
  this.edgeMatrix[toIndex][fromIndex] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex = _.indexOf(this.vertices, fromNode);
  var toIndex = _.indexOf(this.vertices, toNode);
  
  this.edgeMatrix[fromIndex][toIndex] = undefined;
  this.edgeMatrix[toIndex][fromIndex] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.forEach(this.vertices, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



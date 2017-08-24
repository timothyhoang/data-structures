var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  
};

treeMethods.contains = function(target) {
  var truth = false;
  
  if (this.value === target) {
    return true;
  }
  
  for (let child of this.children) {
    truth = truth || child.contains(target);
  }
  
  return truth;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

bstMethods = {
  insert: function(value) {
    if (this.value >= value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },
  
  contains: function(value) {
    if (this.value > value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (this.value < value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }, 
  
  depthFirstLog: function(callback) {
    callback(this.value);
    
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor (data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor (value) {
    this.rootOfTree = new Node(value);
  }

  root() {
    if (this.rootOfTree.data === null) {
      return null;
    } else {
      return this.rootOfTree;
    }
  }

  add(data) {
    let newNode = new Node(data);

    const searchTree = node => {
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree (node.left);
        }

      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree (node.right);
        }
      }
    }

    if (this.rootOfTree.data === null) {
      this.rootOfTree = new Node(data);
    } else {
      searchTree(this.rootOfTree);
    }
  }

  has(data) {
    let currentNode = this.rootOfTree;

    while (currentNode){
      if (data === currentNode.data) {
        return true;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    
    return false;
  }

  find(data) {
    let currentNode = this.rootOfTree;

    while (currentNode){
      if (data === currentNode.data) {
        return currentNode;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    
    return null;
  }

  remove(data) {
    this.rootOfTree = removeNode(this.rootOfTree, data);

    function removeNode(some, data) {
      if (some === null) return some;
      if (data === some.data) {
        if (!some.left && !some.right) {
          return null;
        } else if (!some.left && some.right !== null) {
          return some.right 
        } else if (some.left !== null && !some.right) {
          return some.left;
        } else {
          let buffer = findMin(some.right);
          some.data = buffer.data;
          some.right = removeNode(some.right, buffer.data);
          return some;
        }
      } else if (data > some.data) {
        some.right = removeNode(some.right, data);
        return some;
      } else {
        some.left = removeNode(some.left, data)
        return some;
      }
    }

    function findMin(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }

  }

  min() {
    let currentNode = this.rootOfTree;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.rootOfTree;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
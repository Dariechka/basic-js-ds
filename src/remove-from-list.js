const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (l.value === k){
    l = l.next;
  }
  let currentItem = l;
  while (currentItem.next) {
    if (currentItem.next.value === k) {
      if (!currentItem.next.next) {
        currentItem.next = null;
      } else {
        currentItem.next.value = currentItem.next.next.value;
        currentItem.next.next = currentItem.next.next.next;
      }
      continue;
    }
    currentItem = currentItem.next;
  }
   return l;
}

module.exports = {
  removeKFromList
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Insert value at the head of list
   * @param value
   */

  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  /**
   * Checks to see if list includes given value
   * @params value
   * @returns {boolean}
   */

  includes(value) {
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      if(currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    } return false;
  }

  /**
   * Turns all the values form the list into a string
   * @returns {string}
   */
  
  toString() {
    let string = `${this.head.value}`;
    let currentNode = this.head.next;
    for(let i = 0; i < this.size; i++) {
      string = string + `, ${currentNode.value}`;
      currentNode = currentNode.next;
    } 
    return string;
  }

  append() {
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      currentNode = currentNode.next;
    }
  }
}

module.exports = {
  Node,
  LinkedList
};
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
   * Turns all the values from the list into a string
   * @returns {string}
   */
  
  toString() {
    let string = '';
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      string = string + `${currentNode.value}, `;
      currentNode = currentNode.next;
    } 
    return string;
  }

  /**
   * Adds a new node with the given value to the end of the list
   * @returns {string}
   */
  
  append(value) {
    const node = new Node(value);

    if(this.size) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    else {
      this.head = node;
      this.tail = node;
    }
    this.size++;

    return node.value;
  }

    /**
   * Add a new node with the given newValue immediately before the first value node
   * @returns {string}
   */

  insertBefore(value, newValue) {
    let currentNode = this.head;
    if(currentNode) {
      while(currentNode.next.value !== value) {
        currentNode = currentNode.next;
      }
      const node = new Node(newValue);
      node.next = currentNode.next;
      currentNode.next = node;
      this.size++;
    } else {
      throw new Error('cannot use insertBefore on empty list');
    }
  }

    /**
   * Add a new node with the given newValue immediately after the first value node
   * @returns {string}
   */

  insertAfter(value, newValue) {
    let currentNode = this.head;
    if(currentNode) {
      while(currentNode.value !== value) {
        currentNode = currentNode.next;
      }
      const node = new Node(newValue);
      node.next = currentNode.next;
      currentNode.next = node;
      this.size++;
    } else {
      throw new Error('cannot use insertAfter on empty list');
    }
  }
}

module.exports = {
  Node,
  LinkedList
};
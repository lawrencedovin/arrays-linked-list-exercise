/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** LinkedList: chained together nodes. */
  
  class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }

    /** traverse(): Display values of all nodes */

    traverse() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }

    /** push(val): add new value to end of list. */
  
    push(val) {
      let newNode = new Node(val);
      if(!this.head) {
          this.head = newNode;
          this.tail = newNode;
      }
      // Point current Tail's next to newNode.
      this.tail.next = newNode;
      // Update Tail to New Node.
      this.tail = newNode;
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        // Point New Node's next to Current Head
        newNode.next = this.head;
        // Set Head to New Node.
        this.head = newNode;
    }
  
    /** pop(): return & remove last item. */
  
    pop() {
  
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
  
    }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
  
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
  
    }
  
    /** insertAt(idx, val): add node w/val before idx. */
  
    insertAt(idx, val) {
  
    }
  
    /** removeAt(idx): return & remove item at idx, */
  
    removeAt(idx) {
  
    }
  
    /** average(): return an average of all values in the list */
  
    average() {
      
    }
  }

let pets = new LinkedList();
pets.push('Popcorn');
pets.push('Bok James Bok');
pets.push('George');
// pets.traverse();
pets.unshift('Peacock');
pets.traverse();

module.exports = LinkedList;

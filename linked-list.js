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
        let currentNode = this.head;
        let newTail;
        while(currentNode.next) {
            if(currentNode.next === this.tail) newTail = currentNode;
            currentNode = currentNode.next;
        }
        // Used to return old tail
        let copiedOldTail = this.tail;
        // Update new Tail to newTail.
        this.tail = newTail;
        // Point new Tail's next to null.
        this.tail.next = null;

        return copiedOldTail;
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
        // Used to return old Head.
        let copiedOldHead = this.head;
        // New Head is the Node after current Head.
        let newHead = this.head.next;

        // Sets current Head's next value to null
        // to remove it from the LinkedList.
        this.head.next = null;

        // Updates new Head to newHead.
        this.head = newHead;

        return copiedOldHead;

    }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
        let currentNode = this.head;
        let currentIdx = 0;
        while(currentNode && currentIdx <= idx) {
            if(currentIdx === idx) return currentNode.val;
            currentNode = currentNode.next;
            currentIdx++;
        }
        return `Index ${idx} not found`;
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
        let currentNode = this.head;
        let currentIdx = 0;
        while(currentNode && currentIdx <= idx) {
            if(currentIdx === idx) return currentNode.val = val;
            currentNode = currentNode.next;
            currentIdx++;
        }
        return `Index ${idx} not found`;
    }
  
    /** insertAt(idx, val): add node w/val before idx. */
  
    insertAt(idx, val) {
        let newNode = new Node(val);
        let currentNode = this.head;
        let currentIdx = 0;
        let previousNode;
        let priorNode;
        while(currentNode) {
            if(currentIdx === idx - 1) previousNode = currentNode;
            if(currentIdx === idx) priorNode = currentNode;
            currentNode = currentNode.next;
            currentIdx++;
        }

        // If inserting at Head
        if(idx === 0) {
            // Points New Node next to previous head node
            newNode.next = this.head;
            // Updates Head to New Node
            this.head = newNode;
        }
        else {
            // Updates previous Node's next to New Node
            previousNode.next = newNode;
            // New Node's next is set to the old Node that was previously 
            // at the Index
            newNode.next = priorNode;
        }
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
// pets.unshift('Peacock');

// console.log(pets.pop());
// pets.traverse();

// console.log(pets.shift());
// pets.traverse();

// console.log(pets.getAt(2));
// pets.traverse();

// pets.setAt(2, 'Peanut');
// pets.traverse();

// pets.insertAt(2, 'Shaq O Neil');
// pets.traverse();

// Insert at Head
pets.insertAt(0, 'Ketchup');
pets.traverse();

module.exports = LinkedList;

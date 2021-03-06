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
        let allNodes = [];
        while(currentNode) {
            if(currentIdx === idx - 1) previousNode = currentNode;
            if(currentIdx === idx) priorNode = currentNode;
            allNodes.push(currentNode);
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
        // If inserting at Tail
        else if(allNodes[idx - 1] === this.tail) {
            // Points previous tail Node's next to New Node
            this.tail.next = newNode;
            // Updated Tail to New Node
            this.tail = newNode;
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
        let currentIdx = 0;
        let currentNode = this.head;
        let previousNode;
        let foundNode;
        let allNodes = [];

        // Iterates only up to Index value
        while(currentNode && currentIdx <= idx) {
            allNodes.push(currentNode);
            if(currentIdx === idx - 1) previousNode = currentNode;
            if(currentIdx === idx) foundNode = currentNode;
            currentIdx++;
            currentNode = currentNode.next;
        }

        // Checks if deleting at Head
        if(idx === 0) {
            return this.shift();
        }
        // Checks if deleting at Tail
        else if(allNodes[idx].val === this.tail.val) {
            return this.pop();
        }
        // Else delete at idx without updating head or tail
        else {
            // Used to return old node
            let copiedOldFoundNode = foundNode;
            // Updated previous node to point to Node after current found Node
            previousNode.next = foundNode.next;
            // Point current found Node to null to disconnect from LinkedList
            foundNode.next = null;
            return copiedOldFoundNode;
        }
    }
  
    /** average(): return an average of all values in the list */
  
    average() {
        let currentNode = this.head;
        let sum = 0;
        let length = 0;
        while(currentNode){
            sum += currentNode.val;
            length++;
            currentNode = currentNode.next;
            
        }
        return sum/length;
    }
  }

let pets = new LinkedList();
pets.push('Popcorn');
pets.push('Bok James Bok');
pets.push('George');
let nums = new LinkedList();
nums.push(2);
nums.push(3);
nums.push(1);
nums.push(1);
nums.push(7);
nums.push(6);
nums.push(9);

// pets.traverse();
// pets.unshift('Peacock');

// console.log(pets.pop());
// pets.traverse();

// console.log(pets.shift());
// pets.traverse();

// console.log(pets.getAt(2));
// pets.traverse();

// pets.setAt(0, 'Peanut');
// pets.traverse();

// pets.insertAt(2, 'Shaq O Neil');
// pets.traverse();

// Insert at Head
// pets.insertAt(0, 'Ketchup');
// pets.traverse();

// Insert at Tail
// pets.insertAt(3, 'Red');
// pets.traverse();

// console.log(nums.average());

// Removes at Head
// console.log(pets.removeAt(0));
// pets.traverse();

// Removes at Tail
// console.log(pets.removeAt(2));
// pets.traverse();

// Removes at Index w/o updating Head or Tail
// console.log(pets.removeAt(1));
// pets.traverse();

module.exports = LinkedList;

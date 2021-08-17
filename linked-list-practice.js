class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        // Point current tail's next to New Node
        this.tail.next = newNode;

        // Update tail to New Node
        this.tail = newNode;
    }

    traverse() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    search(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) return true;
            currentNode = currentNode.next;
        }
        return false;
    }
}

class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

let pets = new LinkedList();
pets.append('Popcorn');
pets.append('Bok James Bok');
pets.append('George');
pets.traverse();
console.log(pets.search('Popcorn'));
console.log(pets.search('asdsda'));
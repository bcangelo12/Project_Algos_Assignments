class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let new_node = new Node(val);

        if (!this.head) {
            this.head = new_node;
            return this;
        }

        new_node.next = this.head;

        this.head = new_node;
        return this;
    }

    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        let removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this;
    }

    front() {
        if (this.head == null) {
            return null;
        }
        return this.head.data;
    }
}

let sll1 = new LinkedList();

sll1.addFront(18).addFront(5).addFront(73);
console.log(sll1);
sll1.removeFront().removeFront();
console.log(sll1);
console.log(sll1.front());
sll1.removeFront();
console.log(sll1.front());

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

    display() {
        let runner = this.head;
        let result = "";
        if (this.head == null) {
            return result;
        }
        result += runner.data;
        runner = runner.next;
        while (runner !== null) {
            result += ", " + runner.data;
            runner = runner.next;
        }
        return result;
    }
}

let sll1 = new LinkedList();

sll1.addFront(76).addFront(100).addFront(12000);
console.log(sll1.display());

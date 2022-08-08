var detectCycle = function (head) {
    let hash = new Map();
    let counter = 0;
    while (head != null) {
        if (hash.has(head)) {
            return head;
        }
        hash.set(head, counter);
        counter++;
        head = head.next;
    }
    return null;
};

detectCycle([3, 2, 0, -4], 1);

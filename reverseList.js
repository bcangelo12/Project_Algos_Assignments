var reverseList = function (head) {
    let prev = null,
        curNode = head,
        next;
    while (curNode) {
        next = curNode.next;
        curNode.next = prev;
        prev = curNode;
        curNode = next;
    }
    return prev;
};

reverseList([1, 2, 3, 4, 5]);

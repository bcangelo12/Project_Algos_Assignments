var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode();
    let left = l1;
    let right = l2;
    var cur = dummy;

    let carry = 0;
    while (left != null || right != null) {
        let sum = (left?.val || 0) + (right?.val || 0) + carry;
        let val = sum % 10;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(val);
        cur = cur.next;
        left = left?.next;
        right = right?.next;
    }
    if (carry != 0) {
        cur.next = new ListNode(carry);
    }
    return dummy.next;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);

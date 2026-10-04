function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

middleOfLinkedList = function (head) {
    let slow = head
    let fast = head
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

const head = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(5)
            )
        )
    )
)

console.log(middleOfLinkedList(head))
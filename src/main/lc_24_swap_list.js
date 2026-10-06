function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

var swapNodes = function (head) {
    const dummy = new ListNode(0)
    dummy.next = head

    let prev = dummy

    while (prev.next !== null && prev.next.next !== null) {
        let first = prev.next
        let second = first.next

        // Swap
        first.next = second.next
        second.next = first
        prev.next = second

        // Move to next pair
        prev = first
    }

    return dummy.next
}

const head = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(4)
        )
    )
)

console.log(swapNodes(head))
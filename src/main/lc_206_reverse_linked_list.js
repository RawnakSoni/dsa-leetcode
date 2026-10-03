function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

var reverseList = function (head) {
    let prev = null
    let curr = head
    while (curr !== null) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
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

console.dir(reverseList(head))
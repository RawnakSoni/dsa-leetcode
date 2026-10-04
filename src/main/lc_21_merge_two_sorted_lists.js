function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

mergeSortedLists = function (list1, list2) {
    let dummy = new ListNode(0)
    let tail = dummy
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }
    tail.next = list1 || list2
    return dummy.next
}

const list1 = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(4)
    )
)

const list2 = new ListNode(
    1,
    new ListNode(
        3,
        new ListNode(4)
    )
)

console.log(mergeSortedLists(list1, list2))
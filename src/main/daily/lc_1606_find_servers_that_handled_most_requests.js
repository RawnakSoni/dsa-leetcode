busiestServers = function (k, arrival, load) {
    class CustomMinHeap {
        constructor() {
            this.heap = []
        }

        push(value) {
            let h = this.heap
            h.push(value)

            let i = h.length - 1

            while (i > 0) {
                let p = Math.floor((i - 1) / 2)

                if (h[p][0] <= h[i][0]) break

                [h[p], h[i]] = [h[i], h[p]]
                i = p
            }
        }

        peek() {
            return this.heap[0]
        }

        pop() {
            let h = this.heap
            if (h.length === 0) return null

            let result = h[0]
            let last = h.pop()

            if (h.length > 0) {
                h[0] = last
                let i = 0

                while (true) {
                    let left = 2 * i + 1
                    let right = 2 * i + 2
                    let smallest = i

                    if (left < h.length &&
                        h[left][0] < h[smallest][0]) {
                        smallest = left
                    }

                    if (right < h.length &&
                        h[right][0] < h[smallest][0]) {
                        smallest = right
                    }

                    if (smallest === i) break

                    [h[i], h[smallest]] =
                        [h[smallest], h[i]]

                    i = smallest
                }
            }

            return result
        }
    }

    class CustomSegmentTree {
        constructor(n) {
            this.n = n
            this.tree = new Int32Array(4 * n)

            this.build(1, 0, n - 1)
        }

        build(node, start, end) {
            if (start === end) {
                this.tree[node] = 1
                return
            }

            let mid = Math.floor((start + end) / 2)

            this.build(node * 2, start, mid)
            this.build(node * 2 + 1, mid + 1, end)

            this.tree[node] =
                this.tree[node * 2] +
                this.tree[node * 2 + 1]
        }

        update(node, start, end, idx, value) {
            if (start === end) {
                this.tree[node] = value
                return
            }

            let mid = Math.floor((start + end) / 2)

            if (idx <= mid) {
                this.update(
                    node * 2, start, mid, idx, value
                )
            } else {
                this.update(
                    node * 2 + 1, mid + 1, end, idx, value
                )
            }

            this.tree[node] =
                this.tree[node * 2] +
                this.tree[node * 2 + 1]
        }

        set(idx, value) {
            this.update(1, 0, this.n - 1, idx, value)
        }

        find(node, start, end, ql, qr) {
            if (
                end < ql ||
                start > qr ||
                this.tree[node] === 0
            ) {
                return -1
            }

            if (start === end) return start

            let mid = Math.floor((start + end) / 2)

            let left = this.find(
                node * 2, start, mid, ql, qr
            )

            if (left !== -1) return left

            return this.find(
                node * 2 + 1, mid + 1, end, ql, qr
            )
        }

        first(ql, qr) {
            return this.find(1, 0, this.n - 1, ql, qr)
        }
    }

    let available = new CustomSegmentTree(k)
    let busy = new CustomMinHeap()

    let count = new Array(k).fill(0)

    for (let i = 0; i < arrival.length; i++) {

        let time = arrival[i]

        while (
            busy.heap.length > 0 &&
            busy.peek()[0] <= time
        ) {
            let [finish, server] = busy.pop()
            available.set(server, 1)
        }

        let start = i % k

        let server = available.first(start, k - 1)

        if (server === -1) {
            server = available.first(0, start - 1)
        }
        if (server === -1) continue

        count[server]++
        available.set(server, 0)

        busy.push([
            time + load[i],
            server
        ])
    }

    let max = Math.max(...count)

    return count
        .map((c, i) => c === max ? i : -1)
        .filter(i => i !== -1)
}

const k = 3, arrival = [1, 2, 3, 4, 5], load = [5, 2, 3, 3, 3]
console.log(busiestServers(k, arrival, load))
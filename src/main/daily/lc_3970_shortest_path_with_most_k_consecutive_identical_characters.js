shortestPath = function (n, edges, labels, k) {
    const adj = Array.from({ length: n }, () => [])

    for (const [u, v, w] of edges) {
        adj[u].push([v, w])
    }

    const dist = Array.from(
        { length: n },
        () => new Array(k + 1).fill(Infinity)
    )

    const heap = []

    function push(item) {
        heap.push(item)
        let i = heap.length - 1

        while (i > 0) {
            const p = Math.floor((i - 1) / 2)
            if (heap[p][0] <= heap[i][0]) break

            [heap[p], heap[i]] = [heap[i], heap[p]]
            i = p
        }
    }

    function pop() {
        const result = heap[0]
        const last = heap.pop()

        if (heap.length) {
            heap[0] = last
            let i = 0

            while (true) {
                let smallest = i
                const l = 2 * i + 1
                const r = 2 * i + 2

                if (l < heap.length &&
                    heap[l][0] < heap[smallest][0]) {
                    smallest = l
                }

                if (r < heap.length &&
                    heap[r][0] < heap[smallest][0]) {
                    smallest = r
                }

                if (smallest === i) break

                [heap[i], heap[smallest]] =
                    [heap[smallest], heap[i]]

                i = smallest
            }
        }
        return result
    }


    dist[0][1] = 0
    push([0, 0, 1])

    while (heap.length) {
        const [cost, u, count] = pop()

        if (cost !== dist[u][count]) continue
        if (u === n - 1) return cost

        for (const [v, w] of adj[u]) {
            let nextCount

            if (labels[u] === labels[v]) {
                nextCount = count + 1
            } else {
                nextCount = 1
            }

            if (nextCount > k) continue
            const newCost = cost + w

            if (newCost < dist[v][nextCount]) {
                dist[v][nextCount] = newCost
                push([newCost, v, nextCount])
            }
        }
    }
    return -1
}

const n = 3, labels = "aab", k = 1
const edges = [[0, 1, 1], [1, 2, 1], [0, 2, 3]]

console.log(shortestPath(n, edges, labels, k))
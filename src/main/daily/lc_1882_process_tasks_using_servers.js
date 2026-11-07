class CustomMinHeap {
    constructor(compare) {
        this.heap = []
        this.compare = compare
    }

    push(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    pop() {
        if (this.heap.length === 0) return null

        const top = this.heap[0]
        const last = this.heap.pop()

        if (this.heap.length > 0) {
            this.heap[0] = last
            this.heapifyDown(0)
        }

        return top
    }

    peek() {
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }

    heapifyUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2)

            if (this.compare(this.heap[i], this.heap[parent]) >= 0)
                break

            [this.heap[i], this.heap[parent]] =
                [this.heap[parent], this.heap[i]]

            i = parent
        }
    }

    heapifyDown(i) {
        const n = this.heap.length

        while (true) {
            let smallest = i
            let left = 2 * i + 1
            let right = 2 * i + 2

            if (left < n &&
                this.compare(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left
            }

            if (right < n &&
                this.compare(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right
            }

            if (smallest === i) break

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]]

            i = smallest
        }
    }
}

assignTasks = function (servers, tasks) {

    const available = new CustomMinHeap((a, b) =>
        a.weight - b.weight || a.index - b.index
    )

    const busy = new CustomMinHeap((a, b) =>
        a.end - b.end ||
        a.weight - b.weight ||
        a.index - b.index
    )

    for (let i = 0; i < servers.length; i++) {
        available.push({
            weight: servers[i],
            index: i
        })
    }

    let result = []
    let currentTime = 0

    for (let i = 0; i < tasks.length; i++) {


        currentTime = Math.max(currentTime, i)


        while (
            busy.size() > 0 &&
            busy.peek().end <= currentTime
        ) {
            available.push(busy.pop())
        }


        if (available.size() === 0) {

            currentTime = busy.peek().end

            while (
                busy.size() > 0 &&
                busy.peek().end <= currentTime
            ) {
                available.push(busy.pop())
            }
        }


        let server = available.pop()

        result.push(server.index)


        busy.push({
            weight: server.weight,
            index: server.index,
            end: currentTime + tasks[i]
        })
    }

    return result
}

const servers = [3, 3, 2], tasks = [1, 2, 3, 2, 1, 2]
console.log(assignTasks(servers, tasks))
minOperations = function (nums, x, k) {
    const n = nums.length
    const values = [...new Set(nums)].sort((a, b) => a - b)
    const m = values.length
    const index = new Map()
    values.forEach((v, i) => index.set(v, i + 1))

    class Fenwick {
        constructor(size) {
            this.n = size
            this.count = new Float64Array(size + 1)
            this.sum = new Float64Array(size + 1)
        }

        update(i, count, sum) {
            while (i <= this.n) {
                this.count[i] += count
                this.sum[i] += sum
                i += i & -i
            }
        }

        query(i) {
            let count = 0
            let sum = 0
            while (i > 0) {
                count += this.count[i]
                sum += this.sum[i]
                i -= i & -i
            }
            return [count, sum]
        }


        kth(k) {
            let pos = 0
            let bit = 1
            while (bit * 2 <= this.n) {
                bit *= 2
            }
            for (; bit > 0; bit >>= 1) {
                let next = pos + bit
                if (next <= this.n &&
                    this.count[next] < k) {
                    k -= this.count[next]
                    pos = next
                }
            }
            return pos + 1
        }
    }

    const tree = new Fenwick(m)
    const costs = []

    for (let i = 0; i < x; i++) {
        tree.update(index.get(nums[i]), 1, nums[i])
    }

    for (let i = 0; i <= n - x; i++) {
        const medianPos = tree.kth(Math.ceil(x / 2))
        const median = values[medianPos - 1]

        const [leftCount, leftSum] =
            tree.query(medianPos)

        const rightCount = x - leftCount
        const rightSum = tree.query(m)[1] - leftSum

        const cost =
            median * leftCount - leftSum +
            rightSum - median * rightCount

        costs.push(cost)

        if (i < n - x) {
            tree.update(index.get(nums[i]), -1, -nums[i])
            tree.update(index.get(nums[i + x]), 1, nums[i + x])
        }
    }


    const INF = Infinity
    let prev = new Float64Array(n + 1)

    for (let t = 1; t <= k; t++) {
        const curr = new Float64Array(n + 1)
        curr.fill(INF)

        for (let i = 1; i <= n; i++) {
            curr[i] = curr[i - 1]
            if (i >= x) {
                const candidate =
                    prev[i - x] + costs[i - x]

                curr[i] = Math.min(curr[i], candidate)
            }
        }
        prev = curr
    }
    return prev[n]
}

const nums = [5, -2, 1, 3, 7, 3, 6, 4, -1], x = 3, k = 2
console.log(minOperations(nums, x, k))
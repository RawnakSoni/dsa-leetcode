minSwaps = function (nums) {
    const digitSum = (num) => {
        let sum = 0

        while (num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }

        return sum
    }

    const n = nums.length

    // Sort by digit sum, then by number
    const sorted = [...nums].sort((a, b) => {
        return digitSum(a) - digitSum(b) || a - b
    })

    // Map each number to its target index
    const targetIndex = new Map()

    for (let i = 0; i < n; i++) {
        targetIndex.set(sorted[i], i)
    }

    const visited = new Array(n).fill(false)
    let swaps = 0

    // Count cycles in the permutation
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue

        let j = i
        let cycleSize = 0

        while (!visited[j]) {
            visited[j] = true
            j = targetIndex.get(nums[j])
            cycleSize++
        }

        if (cycleSize > 1) {
            swaps += cycleSize - 1
        }
    }
    return swaps
}

const list = [18, 43, 34, 16]
console.log(minSwaps(list))
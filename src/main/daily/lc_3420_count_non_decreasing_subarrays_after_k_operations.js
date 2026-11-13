countNonDecreasingSubarrays = function (nums, k) {
    const n = nums.length

    let deque = []
    let head = 0
    let j = n - 1
    let cost = 0
    let ans = 0

    for (let i = n - 1; i >= 0; i--) {
        while (
            deque.length > head &&
            nums[deque[deque.length - 1]] < nums[i]
        ) {
            const l = deque.pop()
            const r = deque.length > head
                ? deque[deque.length - 1]
                : j + 1
            cost += (r - l) * (nums[i] - nums[l])
        }

        deque.push(i)

        while (cost > k) {
            cost -= nums[deque[head]] - nums[j]
            if (deque[head] === j) {
                head++
            }
            j--
        }
        ans += j - i + 1
    }
    return ans
}

const nums = [6, 3, 1, 2, 4, 4], k = 7
console.log(countNonDecreasingSubarrays(nums, k))
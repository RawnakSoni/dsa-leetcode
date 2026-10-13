subArraySum = function (nums, k) {
    let sum = 0
    let count = 0
    const map = new Map()
    map.set(0, 1)
    for (const num of nums) {
        sum += num

        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
}
const list = [1, 1, 1], k = 2
console.log(subArraySum(list, k))

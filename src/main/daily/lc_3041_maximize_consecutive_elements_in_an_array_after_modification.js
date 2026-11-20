maxSelectedElements = function (nums) {
    nums.sort((a, b) => a - b)

    let dp = new Map()
    let ans = 0

    for (let num of nums) {
        dp.set(num + 1, (dp.get(num) || 0) + 1)
        dp.set(num, (dp.get(num - 1) || 0) + 1)
        ans = Math.max(ans, dp.get(num), dp.get(num + 1))
    }
    return ans
}

const nums = [2, 1, 5, 1, 1]
console.log(maxSelectedElements(nums))
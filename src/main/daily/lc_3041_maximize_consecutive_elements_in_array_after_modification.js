maxSelectedElements = function (nums) {
    nums.sort((a, b) => a - b)
    let dp = new Map()
    let res = 0

    for (let num of nums) {
        dp.set(num + 1, (dp.get(num) || 0) + 1)
        dp.set(num, (dp.get(num - 1) || 0) + 1)
        res = Math.max(res, dp.get(num), dp.get(num + 1))
    }
    return res
}

const list = [2, 1, 5, 1, 1]
console.log(maxSelectedElements(list))
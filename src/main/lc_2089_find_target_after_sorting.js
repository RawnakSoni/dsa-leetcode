targetIndices = function (nums, target) {
    nums.sort((a, b) => a - b)
    const res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            res.push(i)
        }
    }
    return res
}

const list = [1, 2, 5, 2, 3], target = 2
console.log(targetIndices(list, target))
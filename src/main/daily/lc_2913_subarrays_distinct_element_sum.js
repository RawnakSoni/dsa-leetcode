sumCounts = function (nums) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let newSet = new Set()
        for (let j = i; j < nums.length; j++) {
            newSet.add(nums[j])
            res += newSet.size * newSet.size
        }
    }
    return res
}

const list = [1, 2, 1]
console.log(sumCounts(list))
sortPermutation = function (nums) {
    let ans = -1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            ans &= nums[i]
        }
    }

    return Math.max(ans, 0)
}

const nums = [0, 3, 2, 1]
console.log(sortPermutation(nums))
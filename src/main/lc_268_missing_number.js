missingNumber = function (list) {
    const set = new Set(nums)
    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) {
            return i
        }
    }
}

const list = [0, 1, 3]
console.log(missingNumber(list))
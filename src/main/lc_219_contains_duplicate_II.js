containsDuplicate = function (nums, k) {
    const newMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (newMap.has(nums[i])) {
            const previousIndex = newMap.get(nums[i])
            if (i - previousIndex <= k) {
                return true
            }
        }
        newMap.set(nums[i], i)
    }
    return false
}

const list = [1, 2, 3, 1], k = 3

console.log(containsDuplicate(list, k))
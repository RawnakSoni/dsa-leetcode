searchInsert = function (nums, target) {
    if (target > nums[nums.length - 1]) return nums.length
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}

const nums = [1, 3, 5, 6], target = 2
console.log(searchInsert(nums, target))
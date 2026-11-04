findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    let a = []
    let b = []

    for (let num of set1) {
        if (!set2.has(num)) {
            a.push(num)
        }
    }

    for (let num of set2) {
        if (!set1.has(num)) {
            b.push(num)
        }
    }
    return [a, b]
}

let nums1 = [1, 2, 3, 3], nums2 = [2, 4, 6]
console.log(findDifference(nums1, nums2))
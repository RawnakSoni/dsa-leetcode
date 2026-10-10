minSumSquareDiff = function (nums1, nums2, k1, k2) {
    const diff = nums1.map((num, i) => Math.abs(num - nums2[i]))
    let operations = k1 + k2

    if (diff.reduce((sum, d) => sum + d, 0) <= operations) {
        return 0
    }

    let left = 0
    let right = Math.max(...diff)

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        let needed = 0
        for (const d of diff) {
            needed += Math.max(0, d - mid)
        }

        if (needed <= operations) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    let answer = 0
    let remaining = operations

    for (const d of diff) {
        const reduced = Math.min(d, left)
        answer += reduced * reduced
        remaining -= d - reduced
    }

    // Any remaining operations can reduce differences at the threshold by one.
    if (remaining > 0) {
        for (let i = 0; i < diff.length && remaining > 0; i++) {
            if (diff[i] >= left && left > 0) {
                answer -= left * left - (left - 1) * (left - 1)
                remaining--
            }
        }
    }

    return answer
}

const nums1 = [1, 2, 3, 4], nums2 = [2, 10, 20, 19], k1 = 0, k2 = 0
console.log(minSumSquareDiff(nums1, nums2, k1, k2))
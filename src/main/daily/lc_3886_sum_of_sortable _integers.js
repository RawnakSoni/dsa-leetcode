sortableIntegers = function (nums) {
    const n = nums.length
    const qelvarodin = nums

    const prefMax = new Array(n + 1).fill(0)

    for (let i = 0; i < n; i++) {
        prefMax[i + 1] = Math.max(prefMax[i], nums[i])
    }

    const suffMin = new Array(n + 1).fill(Infinity)

    for (let i = n - 1; i >= 0; i--) {
        suffMin[i] = Math.min(nums[i], suffMin[i + 1])
    }

    const prefDrop = new Array(n).fill(0)

    for (let i = 1; i < n; i++) {
        prefDrop[i] = prefDrop[i - 1] +
            (nums[i - 1] > nums[i] ? 1 : 0)
    }

    let answer = 0

    for (let d = 1; d * d <= n; d++) {
        if (n % d !== 0) continue

        const candidates = d === n / d
            ? [d]
            : [d, n / d]

        for (const k of candidates) {
            let valid = true

            for (let start = 0; start < n; start += k) {
                const end = start + k - 1
                const drops =
                    prefDrop[end] - prefDrop[start] +
                    (nums[end] > nums[start] ? 1 : 0)

                if (
                    drops > 1 ||
                    prefMax[start] > suffMin[start]
                ) {
                    valid = false
                    break
                }
            }

            if (valid) answer += k
        }
    }

    return answer
}

const nums = [3, 1, 2]
console.log(sortableIntegers(nums))
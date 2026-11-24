maxLength = function (nums) {
    let maxLen = 0

    const gcd = (a, b) => {
        while (b) {
            [a, b] = [b, a % b]
        }
        return a
    }

    const lcm = (a, b) => (a * b) / gcd(a, b)

    for (let i = 0; i < nums.length; i++) {
        let product = 1
        let g = nums[i]
        let l = nums[i]

        for (let j = i; j < nums.length; j++) {
            product *= nums[j]
            g = gcd(g, nums[j])
            l = lcm(l, nums[j])

            if (product === g * l) {
                maxLen = Math.max(maxLen, j - i + 1)
            }
        }
    }
    return maxLen
}

const nums = [1, 2, 1, 2, 1, 1, 1]
console.log(maxLength(nums)) 
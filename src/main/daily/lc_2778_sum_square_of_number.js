sumOfSquares = function (nums) {
    let n = nums.length
    let sum = 0
    for (let i = 0; i < n; i++) {
        if (n % (i + 1) === 0) {
            sum += nums[i] * nums[i]
        }
    }
    return sum
}

const list = [1, 2, 3, 4]
console.log(sumOfSquares(list))
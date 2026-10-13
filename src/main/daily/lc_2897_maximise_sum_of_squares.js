maxSum = function (list, k) {
    const MOD = 1000000007n
    const bits = new Array(31).fill(0)

    // Count the set bits
    for (const num of list) {
        for (let b = 0; b < 31; b++) {
            if ((num >>> b) & 1) {
                bits[b]++
            }
        }
    }

    let ans = 0n

    // Build each number using all available bits
    for (let i = 0; i < k; i++) {
        let num = 0
        for (let b = 30; b >= 0; b--) {
            if (bits[b] > 0) {
                num += 2 ** b
                bits[b]--
            }
        }
        const value = BigInt(num)
        ans = (ans + value * value) % MOD
    }
    return Number(ans)
}

let list = [2, 6, 5, 8], k = 2
console.log(maxSum(list, k))
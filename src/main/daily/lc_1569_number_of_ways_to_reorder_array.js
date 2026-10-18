numOfWays = function (nums) {
    const MOD = 1_000_000_007n
    const n = nums.length

    const comb = Array.from(
        { length: n + 1 },
        () => Array(n + 1).fill(0)
    )

    for (let i = 0; i <= n; i++) {
        comb[i][0] = 1
        comb[i][i] = 1

        for (let j = 1; j < i; j++) {
            comb[i][j] =
                (comb[i - 1][j - 1] + comb[i - 1][j]) %
                1_000_000_007
        }
    }

    function countWays(arr) {
        if (arr.length <= 2) return 1n

        const root = arr[0]
        const left = []
        const right = []

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < root) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }

        const waysToInterleave =
            BigInt(comb[arr.length - 1][left.length])

        return (
            waysToInterleave *
            countWays(left) *
            countWays(right)
        ) % MOD
    }

    return Number((countWays(nums) - 1n + MOD) % MOD)
}

const nums = [3, 4, 5, 1, 2]
console.log(numOfWays(nums))
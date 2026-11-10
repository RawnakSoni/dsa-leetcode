climbStairs = function (n, costs) {
    let dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= n; i++) {

        dp[i] = dp[i - 1] + costs[i - 1] + 1

        if (i >= 2) {
            dp[i] = Math.min(
                dp[i],
                dp[i - 2] + costs[i - 1] + 4
            )
        }

        if (i >= 3) {
            dp[i] = Math.min(
                dp[i],
                dp[i - 3] + costs[i - 1] + 9
            )
        }
    }
    return dp[n]
}

const n = 4, costs = [1, 2, 3, 4]
console.log(climbStairs(n, costs))
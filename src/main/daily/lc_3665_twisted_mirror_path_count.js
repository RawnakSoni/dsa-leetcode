uniquePaths = function (grid) {
    const MOD = 1e9 + 7
    const m = grid.length
    const n = grid[0].length

    const dp = Array.from(
        { length: m },
        () => Array.from(
            { length: n },
            () => [0, 0]
        )
    )

    dp[0][0][0] = 1

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let d = 0; d < 2; d++) {
                const ways = dp[i][j][d]

                if (ways === 0) continue

                if (grid[i][j] === 0) {

                    if (j + 1 < n) {
                        dp[i][j + 1][0] =
                            (dp[i][j + 1][0] + ways) % MOD
                    }

                    if (i + 1 < m) {
                        dp[i + 1][j][1] =
                            (dp[i + 1][j][1] + ways) % MOD
                    }

                } else {

                    if (d === 0 && i + 1 < m) {
                        dp[i + 1][j][1] =
                            (dp[i + 1][j][1] + ways) % MOD

                    } else if (d === 1 && j + 1 < n) {
                        dp[i][j + 1][0] =
                            (dp[i][j + 1][0] + ways) % MOD
                    }
                }
            }
        }
    }

    return (
        dp[m - 1][n - 1][0] +
        dp[m - 1][n - 1][1]
    ) % MOD
}

const grid = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0]
]
console.log(uniquePaths(grid))
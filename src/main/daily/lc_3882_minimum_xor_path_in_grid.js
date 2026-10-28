minCost = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const LIMIT = 1024

    const dp = Array.from(
        { length: n },
        () => new Uint8Array(LIMIT)
    )

    dp[0][grid[0][0]] = 1

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (i === 0 && j === 0) continue

            const value = grid[i][j]
            const reachable = new Uint8Array(LIMIT)

            if (i > 0) {
                for (let x = 0; x < LIMIT; x++) {
                    if (dp[j][x]) {
                        reachable[x ^ value] = 1
                    }
                }
            }

            if (j > 0) {
                for (let x = 0; x < LIMIT; x++) {
                    if (dp[j - 1][x]) {
                        reachable[x ^ value] = 1
                    }
                }
            }
            dp[j] = reachable
        }
    }
    for (let x = 0; x < LIMIT; x++) {
        if (dp[n - 1][x]) return x
    }
}

const grid = [[1, 2], [3, 4]]
console.log(minCost(grid))
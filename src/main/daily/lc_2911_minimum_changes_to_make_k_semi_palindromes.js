minimumChanges = function (s, k) {
    const n = s.length
    const INF = 1e9

    const cost = Array.from({ length: n }, () =>
        Array(n).fill(INF)
    )

    for (let len = 2; len <= n; len++) {
        for (let l = 0; l + len <= n; l++) {
            const r = l + len - 1

            for (let d = 1; d < len; d++) {
                if (len % d !== 0) continue

                let changes = 0

                for (let i = 0; i < d; i++) {
                    for (let j = 0; j < len / d; j++) {
                        const left = l + i + j * d
                        const right = l + i + (len / d - 1 - j) * d

                        if (left < right && s[left] !== s[right]) {
                            changes++
                        }
                    }
                }
                cost[l][r] = Math.min(cost[l][r], changes)
            }
        }
    }

    const dp = Array.from({ length: k + 1 }, () =>
        Array(n + 1).fill(INF)
    )

    dp[0][0] = 0

    for (let parts = 1; parts <= k; parts++) {
        for (let i = 2 * parts; i <= n; i++) {
            for (let j = 2 * (parts - 1); j <= i - 2; j++) {
                dp[parts][i] = Math.min(
                    dp[parts][i],
                    dp[parts - 1][j] + cost[j][i - 1]
                )
            }
        }
    }
    return dp[k][n]
}

const s = "abcac", k = 2
console.log(minimumChanges(s, k)) 
closedIsland = function (grid) {
    const m = grid.length
    const n = grid[0].length

    dfs = function (r, c) {
        if (r < 0 || c < 0 || r >= m || c >= n) {
            return false
        }

        if (grid[r][c] === 1) {
            return true
        }

        grid[r][c] = 1

        const up = dfs(r - 1, c)
        const down = dfs(r + 1, c)
        const left = dfs(r, c - 1)
        const right = dfs(r, c + 1)

        return up && down && left && right
    }

    let count = 0

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0 && dfs(r, c)) {
                count++
            }
        }
    }

    return count
}

const grid = [
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0]
]

console.log(closedIsland(grid))

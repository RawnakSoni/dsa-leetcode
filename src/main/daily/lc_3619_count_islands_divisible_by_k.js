countIslands = function (grid, k) {
    const m = grid.length
    const n = grid[0].length
    let count = 0

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue
            let sum = 0
            const stack = [[r, c]]
            sum += grid[r][c]
            grid[r][c] = 0

            while (stack.length > 0) {
                const [row, col] = stack.pop()
                for (const [dr, dc] of directions) {
                    const nr = row + dr
                    const nc = col + dc
                    if (
                        nr >= 0 && nr < m &&
                        nc >= 0 && nc < n &&
                        grid[nr][nc] > 0
                    ) {
                        sum += grid[nr][nc]
                        grid[nr][nc] = 0
                        stack.push([nr, nc])
                    }
                }
            }

            if (sum % k === 0) {
                count++
            }
        }
    }
    return count
}


const grid1 = [
    [0, 2, 1, 0, 0],
    [0, 5, 0, 0, 5],
    [0, 0, 1, 0, 0],
    [0, 1, 4, 7, 0],
    [0, 2, 0, 0, 8]
]
console.log(countIslands(grid1, 5))

const grid2 = [
    [3, 0, 3, 0],
    [0, 3, 0, 3],
    [3, 0, 3, 0]
]
console.log(countIslands(grid2, 3)) 
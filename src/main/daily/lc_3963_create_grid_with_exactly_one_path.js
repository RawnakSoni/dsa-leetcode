createGrid = function (m, n) {
    const grid = Array.from(
        { length: m },
        () => Array(n).fill('#')
    )
    for (let j = 0; j < n; j++) {
        grid[0][j] = '.'
    }
    for (let i = 0; i < m; i++) {
        grid[i][n - 1] = '.'
    }
    return grid.map(row => row.join(''))
}


console.log(createGrid(2, 3))
console.log(createGrid(3, 3))
console.log(createGrid(1, 4))
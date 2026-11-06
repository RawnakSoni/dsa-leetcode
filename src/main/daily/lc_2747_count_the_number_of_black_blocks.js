countBlackBlocks = function (m, n, coordinates) {
    let map = new Map()
    for (let [r, c] of coordinates) {

        let blocks = [
            [r - 1, c - 1],
            [r - 1, c],
            [r, c - 1],
            [r, c]
        ]

        for (let [x, y] of blocks) {
            if (x >= 0 && y >= 0 &&
                x < m - 1 && y < n - 1) {
                let key = `${x},${y}`
                map.set(key, (map.get(key) || 0) + 1)
            }
        }
    }

    let total = (m - 1) * (n - 1)
    let result = [0, 0, 0, 0, 0]

    for (let count of map.values()) {
        result[count]++
    }

    result[0] = total - map.size
    return result
}

const m = 3, n = 3, coordinates = [[0, 0]]
console.log(countBlackBlocks(m, n, coordinates))
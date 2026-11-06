countServers = function (n, logs, x, queries) {
    logs.sort((a, b) => a[1] - b[1])
    let sortedQueries = queries
        .map((q, i) => [q, i])
        .sort((a, b) => a[0] - b[0])
    let freq = new Map()

    let left = 0
    let right = 0
    let active = 0
    let result = new Array(queries.length)

    for (let [q, idx] of sortedQueries) {

        while (
            right < logs.length &&
            logs[right][1] <= q
        ) {
            let server = logs[right][0]
            freq.set(server, (freq.get(server) || 0) + 1)

            if (freq.get(server) === 1) {
                active++
            }
            right++
        }


        while (
            left < right &&
            logs[left][1] < q - x
        ) {
            let server = logs[left][0]
            freq.set(server, freq.get(server) - 1)

            if (freq.get(server) === 0) {
                active--
            }
            left++
        }
        result[idx] = n - active
    }
    return result
}

const n = 3, logs = [[1, 3], [2, 6], [1, 5]], x = 5, queries = [10, 11]
console.log(countServers(n, logs, x, queries))
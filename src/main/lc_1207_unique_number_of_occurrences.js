uniqueOccurrences = function (arr) {
    let freq = new Map()

    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    let values = [...freq.values()]
    let unique = new Set(values)

    return values.length === unique.size
}

const arr = [1, 2, 2, 1, 1, 3]
console.log(uniqueOccurrences(arr))
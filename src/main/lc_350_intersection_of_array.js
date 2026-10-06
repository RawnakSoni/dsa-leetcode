intersection = function (arr1, arr2) {
    const count = new Map()
    const res = []
    for (const num of arr1) {
        count.set(num, (count.get(num) || 0) + 1)
    }
    for (const num of arr2) {
        if (count.has(num) && count.get(num) > 0) {
            res.push(num)
            count.set(num, count.get(num) - 1)
        }
    }
    return res
}

const arr1 = [1, 2, 2, 1]
const arr2 = [2, 2]

console.log(intersection(arr1, arr2))
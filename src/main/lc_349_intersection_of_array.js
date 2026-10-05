intersection = function (arr1, arr2) {
    const set1 = new Set(arr1)
    const res = []
    for (const num of arr2) {
        if (set1.has(num)) {
            res.push(num)
            set1.delete(num)
        }
    }
    return res
}

const arr1 = [1, 2, 2, 1]
const arr2 = [2, 2]

console.log(intersection(arr1, arr2))
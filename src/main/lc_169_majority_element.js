majorityElement = function (list) {
    let candidate = 0
    let count = 0
    for (const num of list) {
        if (count === 0) {
            candidate = num
        }
        if (num === candidate) {
            count++
        } else {
            count--
        }
    }
    return candidate
}

const list = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(list))
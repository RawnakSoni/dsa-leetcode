singleNumber = function (list) {
    let newSet = new Set()
    for (let num of list) {
        if (newSet.has(num)) {
            newSet.delete(num)
        } else {
            newSet.add(num)
        }
    }
    return [...newSet][0]
}

const list = [4, 1, 2, 1, 2]
console.log(singleNumber(list))
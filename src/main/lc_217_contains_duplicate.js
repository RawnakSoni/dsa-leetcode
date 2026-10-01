containsDuplicate = function (list) {
    const newSet = new Set()
    for (const num of list) {
        if (newSet.has(num)) {
            return true
        }
        newSet.add(num)
    }
    return false
}

const list = [1, 11, 2, 7, 15]

console.log(containsDuplicate(list))
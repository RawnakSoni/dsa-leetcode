twoSum = function (list, target) {
    const newMap = new Map()
    for (let i = 0; i < list.length; i++) {
        const element = target - list[i]
        if (newMap.has(element)) {
            return [newMap.get(element), i]
        }
        newMap.set(list[i], i)
    }
    return []
}

const list = [2, 7, 11, 15]
const target = 9

console.log(twoSum(list, target))
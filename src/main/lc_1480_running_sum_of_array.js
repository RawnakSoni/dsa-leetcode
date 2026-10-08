runningSum = function (list) {
    for (let i = 1; i < list.length; i++) {
        list[i] = list[i] + list[i - 1]
    }
    return list
}

const list = [1, 2, 3, 4]
runningSum(list)
console.log(list)
productOfArray = function (list) {
    let prefix = 1, res = new Array(list.length).fill(1), sufix = 1
    for (let i = 0; i < list.length; i++) {
        res[i] = prefix
        prefix *= list[i]
    }
    for (let i = list.length - 1; i >= 0; i--) {
        res[i] *= sufix
        sufix *= list[i]
    }
    return res
}

const list = [1, 2, 3, 4]
console.log(productOfArray(list))
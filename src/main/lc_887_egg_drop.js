eggDrop = function (egg, floor) {
    if (floor == 0 || floor == 1) {
        return floor
    }
    if (egg == 1) {
        return floor
    }
    let num = Infinity
    for (let k = 1; k <= floor; k++) {
        let temp = 1 + Math.max(eggDrop(egg - 1, k - 1), eggDrop(egg, floor - k))
        num = Math.min(num, temp)
    }
    return num
}

const egg = 2, floor = 6
console.log(eggDrop(egg, floor))
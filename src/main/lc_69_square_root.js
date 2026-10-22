squareRoot = function (num) {
    if (num < 2) return num
    let left = 2
    let right = Math.floor(num / 2)

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let rootNum = mid * mid
        if (rootNum === num) {
            return mid
        } else if (rootNum < num) {
            left = mid + 1
        } else if (rootNum > num) {
            right = mid - 1
        }
    }
    return right
}

const num = 163
console.log(squareRoot(num))
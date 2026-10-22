isPerfectSquare = function (num) {

    if (num < 2) return true

    let left = 2, right = Math.floor(num / 2)

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let numRoot = mid * mid
        if (numRoot === num) {
            return true
        }
        if (numRoot > num) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
}

const num = 16
console.log(isPerfectSquare(num))
maxSumOfSquares = function (num, sum) {
    if (sum > num * 9) return ""

    const nines = Math.floor(sum / 9)
    const remainder = sum % 9

    let result = "9".repeat(nines)

    if (remainder > 0) {
        result += String(remainder)
    }

    result += "0".repeat(num - result.length)

    return result
}

const num = 2, sum = 3
console.log(maxSumOfSquares(num, sum))
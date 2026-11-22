checkString = function (s) {
    let foundB = false

    for (let char of s) {
        if (char === 'b') {
            foundB = true
        } else if (foundB) {
            return false
        }
    }
    return true
}

const s = "aaabbb"
console.log(checkString(s))
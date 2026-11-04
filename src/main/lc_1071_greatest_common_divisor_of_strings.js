gcd = function (a, b) {
    while (b !== 0) {
        let temp = b
        b = a % b
        a = temp
    }
    return a
}

gcdOfStrings = function (str1, str2) {

    if (str1 + str2 !== str2 + str1) {
        return ""
    }

    let len = gcd(str1.length, str2.length)

    return str1.substring(0, len)
}

const str1 = "ABABAB", str2 = "ABAB"
console.log(gcdOfStrings(str1, str2))
romanToInteger = function (roman) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let res = 0
    for (let i = 0; i < roman.length; i++) {
        if (values[roman[i]] < values[roman[i + 1]]) {
            res -= values[roman[i]]
        } else {
            res += values[roman[i]]
        }
    }
    return res
}

const roman = 'LVIII'
console.log(romanToInteger(roman))
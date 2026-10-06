pow = function (num, pwr) {
    if (pwr === 0) {
        return 1
    }
    if (pwr < 0) {
        return 1 / pow(num, -pwr)
    }

    if (pwr % 2 === 0) {
        let half = pow(num, pwr / 2)
        return half * half
    }
    return num * pow(num, pwr - 1)
}

let num = 2.10000, pwr = 3
console.log(pow(num, pwr))
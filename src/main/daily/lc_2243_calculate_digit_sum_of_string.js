digitSum = function (s, k) {
    while (s.length > k) {
        let result = ""

        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k)
            let sum = 0

            for (let digit of group) {
                sum += Number(digit)
            }
            result += sum
        }
        s = result
    }
    return s
}

const s = "11111222223", k = 4
console.log(digitSum(s, k))
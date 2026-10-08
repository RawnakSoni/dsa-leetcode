removeOuterParentheses = function (str) {
    let balance = 0
    let res = ''
    for (const ch of str) {
        if (ch === '(') {
            if (balance > 0) {
                res += ch
            }
            balance++
        } else {
            balance--
            if (balance > 0) {
                res += ch
            }
        }
    }
    return res
}

const str = '(()())(())'
console.log(removeOuterParentheses(str))
isValidParentheses = function (str) {
    const stack = []

    for (const char of str) {
        if (char == '(') {
            stack.push(')')
        } else if (char == '[') {
            stack.push(']')
        } else if (char == '{') {
            stack.push('}')
        } else if (stack.pop() != char) {
            return false
        }
    }
    return stack.length == 0
}

const str = '[{()(}]'
console.log(isValidParentheses(str)) 
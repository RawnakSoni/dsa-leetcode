maxAlternatingSum = function (list) {
    const squares = list.map(num => num * num)
    squares.sort((a, b) => a - b)
    const mid = Math.floor(list.length / 2)
    let answer = 0
    for (let i = 0; i < mid; i++) {
        answer -= squares[i]
    }
    for (let i = mid; i < squares.length; i++) {
        answer += squares[i]
    }
    return answer
}

const list = [1, 2, 3]
console.log(maxAlternatingSum(list))
minMoves = function (nums) {
    let max = Math.max(...nums)
    let moves = 0
    for (let num of nums) {
        moves += max - num
    }
    return moves
}

const list = [2, 1, 3]
console.log(minMoves(list))
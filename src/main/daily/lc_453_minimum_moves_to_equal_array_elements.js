minMoves = function (nums) {
    const min = Math.min(...nums)

    let moves = 0

    for (const num of nums) {
        moves += num - min
    }
    return moves
}

const nums = [1, 2, 3]
console.log(minMoves(nums))
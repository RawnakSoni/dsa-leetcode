canAliceWin = function (n) {
    let remove = 10
    let aliceTurn = true

    while (n >= remove) {
        n -= remove
        remove--
        aliceTurn = !aliceTurn
    }

    return !aliceTurn
}

const n = 12
console.log(canAliceWin(n))
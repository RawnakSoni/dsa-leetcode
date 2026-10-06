moveZeroes = function (list) {
    let left = 0
    for (let right = 0; right < list.length; right++) {
        if (list[right] !== 0) {
            [list[left], list[right]] = [list[right], list[left]]
            left++
        }
    }
}

let list = [0, 1, 0, 3, 12]
moveZeroes(list)
console.log(list)
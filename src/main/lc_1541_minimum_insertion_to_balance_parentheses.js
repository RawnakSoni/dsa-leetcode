minInsert = function (str) {
    let open = 0
    let insert = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            open++
        } else {
            // If the next character isn't ')',
            // insert one ')' to complete the pair.
            if (i + 1 >= str.length || str[i + 1] !== ')') {
                insert++
            } else {
                // Consume the second ')' in the pair.
                i++
            }
            // A closing pair needs one opening '('.
            if (open > 0) {
                open--
            } else {
                // Insert a missing opening '('.
                insert++
            }
        }
    }
    // Every remaining '(' needs two ')'.
    return insert + open * 2
}

const parenthesesString = '(()))'
console.log(minInsert(parenthesesString))
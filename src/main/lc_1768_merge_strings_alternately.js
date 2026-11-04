mergeAlternately = function (word1, word2) {
    let result = ""
    let i = 0
    while (i < word1.length || i < word2.length) {
        if (i < word1.length) {
            result += word1[i]
        }
        if (i < word2.length) {
            result += word2[i]
        }
        i++
    }
    return result
}

const word1 = "abc", word2 = "pqr"
console.log(mergeAlternately(word1, word2))
isSubsequence = function (sub, str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (sub[count] === str[i]) {
            count++
        }
    }
    return count === sub.length
}

const sub = "abc", str = "ahbgdc"
console.log(isSubsequence(sub, str))
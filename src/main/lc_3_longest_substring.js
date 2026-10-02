longestSubstring = function (str) {
    let j = 0, newSet = new Set(), maxLen = 0
    for (let i = 0; i < str.length; i++) {
        while (newSet.has(str[i])) {
            newSet.delete(str[j])
            j++
        }
        newSet.add(str[i])
        maxLen = Math.max(maxLen, i - j + 1)
    }
    return maxLen
}

const str = 'abcabbca'
console.log(longestSubstring(str))
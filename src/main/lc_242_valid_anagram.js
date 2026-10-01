isAnagram = function (str1, str2) {
    let newStr1 = str1.toLowerCase().split("").sort().join("")
    let newStr2 = str2.toLowerCase().split("").sort().join("")
    return newStr1 === newStr2
}

const str1 = 'Abc'
const str2 = 'bCa'

console.log(isAnagram(str1, str2))
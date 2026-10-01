isPalindrome = function (str) {
    let str1 = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let str2 = str1.split('').reverse().join('')
    return str1 == str2
}


const str = 'A man, a plan, a canal: Panama'
console.log(isPalindrome(str))
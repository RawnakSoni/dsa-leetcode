groupAngram = function (strs) {
    let newMap = new Map()
    for (let str of strs) {
        let modStr = str.split('').sort().join('')
        if (newMap.has(modStr)) {
            (newMap.get(modStr)).push(str)
        } else {
            newMap.set(modStr, [str])
        }
    }
    return [...newMap.values()]
}

const strs = ['abc', 'bca', 'cab', 'dab', 'bad']
console.log(groupAngram(strs))
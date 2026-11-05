findTheDistanceValue = function (arr1, arr2, d) {
    let count = 0

    for (let i = 0; i < arr1.length; i++) {
        let valid = true
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                valid = false
                break
            }
        }
        if (valid) {
            count++
        }
    }
    return count
}

const arr1 = [4, 5, 8], arr2 = [10, 9, 1, 8], d = 2
console.log(findTheDistanceValue(arr1, arr2, d))
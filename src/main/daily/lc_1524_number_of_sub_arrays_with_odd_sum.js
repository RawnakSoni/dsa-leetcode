numOfSubarrays = function (arr) {
    const MOD = 1e9 + 7

    let odd = 0
    let even = 1
    let sum = 0
    let ans = 0

    for (let num of arr) {
        sum += num

        if (sum % 2 === 0) {
            ans += odd
            even++
        } else {
            ans += even
            odd++
        }
    }
    return ans % MOD
}

const arr = [1, 3, 5]
console.log(numOfSubarrays(arr))
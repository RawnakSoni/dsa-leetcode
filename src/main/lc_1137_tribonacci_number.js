tribonacci = function (n) {
    let memo = {}

    solve = function (n) {
        if (n === 0) return 0
        if (n <= 2) return 1

        if (n in memo) return memo[n]
        memo[n] = solve(n - 1) + solve(n - 2) + solve(n - 3)

        return memo[n]
    }

    return solve(n)
}

const n = 7
console.log(tribonacci(n))
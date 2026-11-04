kidsWithCandies = function (candies, extraCandies) {

    let max = Math.max(...candies)
    let result = []

    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= max)
    }

    return result
}

const candies = [2, 3, 5, 1, 3], extraCandies = 3
console.log(kidsWithCandies(candies, extraCandies))
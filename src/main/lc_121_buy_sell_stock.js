maxProfit = function (list) {
    let minPrice = list[0]
    let maxProfit = 0
    for (let i = 1; i < list.length; i++) {
        let profit = list[i] - minPrice
        maxProfit = Math.max(profit, maxProfit)
        minPrice = Math.min(list[i], minPrice)
    }
    return maxProfit
}

const list = [1, 11, 2, 7, 15]

console.log(maxProfit(list))
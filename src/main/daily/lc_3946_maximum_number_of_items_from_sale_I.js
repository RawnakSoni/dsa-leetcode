maximumSaleItems = function (items, budget) {
    const dp = new Int32Array(budget + 1).fill(-1)
    dp[0] = 0
    let cheapest = Infinity

    for (let i = 0; i < items.length; i++) {
        const [factor, price] = items[i]
        cheapest = Math.min(cheapest, price)

        if (price > budget) continue

        let copies = 1
        for (let j = 0; j < items.length; j++) {
            if (j !== i && items[j][0] % factor === 0) {
                copies++
            }
        }

        for (let spent = budget; spent >= price; spent--) {
            const previous = dp[spent - price]
            if (previous !== -1) {
                dp[spent] = Math.max(dp[spent], previous + copies)
            }
        }
    }

    let answer = 0
    for (let spent = 0; spent <= budget; spent++) {
        if (dp[spent] === -1) continue

        const extra = Math.floor((budget - spent) / cheapest)
        answer = Math.max(answer, dp[spent] + extra)
    }

    return answer
}

const items = [[6, 2], [2, 6], [3, 4]], budget = 9
console.log(maximumSaleItems(items, budget))
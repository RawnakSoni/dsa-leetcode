maximumSaleItems = function (items, budget) {
    const n = items.length
    const frequency = new Int32Array(n + 1)
    let cheapest = Infinity

    for (const [factor, price] of items) {
        frequency[factor]++
        cheapest = Math.min(cheapest, price)
    }

    const eligible = new Int32Array(n + 1)
    for (let factor = 1; factor <= n; factor++) {
        if (frequency[factor] === 0) continue

        let count = -1
        for (let multiple = factor; multiple <= n; multiple += factor) {
            count += frequency[multiple]
        }
        eligible[factor] = count
    }

    const deals = []
    for (const [factor, price] of items) {
        if (eligible[factor] > 0 && price < 2 * cheapest) {
            deals.push([price, eligible[factor]])
        }
    }

    deals.sort((a, b) => a[0] - b[0])

    let copies = 0
    for (const [price, limit] of deals) {
        if (price > budget) break

        const bought = Math.min(limit, Math.floor(budget / price))
        budget -= bought * price
        copies += 2 * bought
    }
    return copies + Math.floor(budget / cheapest)
}

const items = [[1, 6], [2, 4], [3, 5]], budget = 19
console.log(maximumSaleItems(items, budget))
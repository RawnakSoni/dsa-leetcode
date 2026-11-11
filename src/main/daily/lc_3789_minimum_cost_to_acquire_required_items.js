minimumCost = function (cost1, cost2, costBoth, need1, need2) {
    const common = Math.min(need1, need2)

    return (
        common * Math.min(costBoth, cost1 + cost2) +
        Math.max(0, need1 - need2) * Math.min(cost1, costBoth) +
        Math.max(0, need2 - need1) * Math.min(cost2, costBoth)
    )
}

const cost1 = 5, cost2 = 4, costBoth = 15, need1 = 2, need2 = 3
console.log(minimumCost(cost1, cost2, costBoth, need1, need2))
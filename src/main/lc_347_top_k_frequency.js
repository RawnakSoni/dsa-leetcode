topKFrequent = function (list, k) {
    let count = new Map()
    for (const ele of list) {
        count.set(ele, (count.get(ele) || 0) + 1)
    }
    const newSorted = [...count.entries()].sort((a, b) => b[1] - a[1])
    return newSorted.slice(0, k).map(([ele]) => ele)
}

const list = [1, 1, 1, 2, 2, 3], K = 2
console.log(topKFrequent(list, K))
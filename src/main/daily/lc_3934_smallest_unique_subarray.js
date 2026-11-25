smallestUniqueSubarray = function (nums) {
    const n = nums.length
    const suffixes = buildSuffixArray(nums)
    const position = new Int32Array(n)
    const lcp = new Int32Array(n)

    for (let p = 0; p < n; p++) {
        position[suffixes[p]] = p
    }

    // lcp[p] is the common prefix length of suffixes[p - 1] and suffixes[p].
    let common = 0
    for (let start = 0; start < n; start++) {
        const p = position[start]
        if (p === 0) {
            common = 0
            continue
        }

        const previous = suffixes[p - 1]
        while (
            start + common < n &&
            previous + common < n &&
            nums[start + common] === nums[previous + common]
        ) {
            common++
        }

        lcp[p] = common
        if (common > 0) common--
    }

    let answer = n
    for (let p = 0; p < n; p++) {
        const rightLcp = p + 1 < n ? lcp[p + 1] : 0
        const length = Math.max(lcp[p], rightLcp) + 1

        if (length <= n - suffixes[p]) {
            answer = Math.min(answer, length)
        }
    }

    return answer
}

buildSuffixArray = function (nums) {
    const n = nums.length
    const suffixes = new Int32Array(n)
    const bySecondRank = new Int32Array(n)
    let rank = Int32Array.from(nums)
    let nextRank = new Int32Array(n)
    let maxRank = 0

    for (let i = 0; i < n; i++) {
        bySecondRank[i] = i
        maxRank = Math.max(maxRank, rank[i])
    }

    const count = new Int32Array(Math.max(n, maxRank) + 1)

    sortByFirstRank = function () {
        count.fill(0, 0, maxRank + 1)

        for (const start of bySecondRank) {
            count[rank[start]]++
        }
        for (let r = 1; r <= maxRank; r++) {
            count[r] += count[r - 1]
        }
        for (let i = n - 1; i >= 0; i--) {
            const start = bySecondRank[i]
            suffixes[--count[rank[start]]] = start
        }
    }

    sortByFirstRank()

    for (let width = 1; width < n; width *= 2) {
        let size = 0

        // A missing second half has rank 0, so those suffixes come first.
        for (let start = n - width; start < n; start++) {
            bySecondRank[size++] = start
        }
        for (const start of suffixes) {
            if (start >= width) {
                bySecondRank[size++] = start - width
            }
        }

        sortByFirstRank()

        let classes = 1
        nextRank[suffixes[0]] = classes

        for (let p = 1; p < n; p++) {
            const a = suffixes[p - 1]
            const b = suffixes[p]
            const secondA = a + width < n ? rank[a + width] : 0
            const secondB = b + width < n ? rank[b + width] : 0

            if (rank[a] !== rank[b] || secondA !== secondB) {
                classes++
            }
            nextRank[b] = classes
        }
        [rank, nextRank] = [nextRank, rank]
        maxRank = classes
        if (classes === n) break
    }
    return suffixes
}

const nums = [2, 1, 2, 3, 3]
console.log(smallestUniqueSubarray(nums))
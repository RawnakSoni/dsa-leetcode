findSubtreeSizes = function (parent, s) {
    let n = parent.length
    let children = Array.from({ length: n }, () => [])

    for (let i = 1; i < n; i++) {
        children[parent[i]].push(i)
    }

    let newParent = [...parent]
    let lastSeen = new Map()

    function dfs(node) {
        let ch = s[node]
        let previous = lastSeen.get(ch)

        if (previous !== undefined) {
            newParent[node] = previous
        }
        lastSeen.set(ch, node)

        for (let child of children[node]) {
            dfs(child)
        }

        if (previous === undefined) {
            lastSeen.delete(ch)
        } else {
            lastSeen.set(ch, previous)
        }
    }

    dfs(0)

    let newChildren = Array.from({ length: n }, () => [])
    for (let i = 1; i < n; i++) {
        newChildren[newParent[i]].push(i)
    }

    let ans = Array(n).fill(1)

    function calculate(node) {
        for (let child of newChildren[node]) {
            calculate(child)
            ans[node] += ans[child]
        }
    }

    calculate(0)

    return ans
}

const parent = [-1, 0, 0, 1, 1, 1], s = "abaabc"
console.log(findSubtreeSizes(parent, s))
palindromePath = function (n, edges, s, queries) {
    const adj = Array.from({ length: n }, () => [])
    for (const [u, v] of edges) {
        adj[u].push(v)
        adj[v].push(u)
    }

    const parent = new Int32Array(n).fill(-1)
    const depth = new Int32Array(n)
    const size = new Int32Array(n).fill(1)
    const heavy = new Int32Array(n).fill(-1)
    const order = []
    const stack = [0]

    parent[0] = 0
    while (stack.length) {
        const u = stack.pop()
        order.push(u)
        for (const v of adj[u]) {
            if (v === parent[u]) continue
            parent[v] = u
            depth[v] = depth[u] + 1
            stack.push(v)
        }
    }

    for (let i = order.length - 1; i >= 0; i--) {
        const u = order[i]
        let bestSize = 0
        for (const v of adj[u]) {
            if (parent[v] !== u) continue
            size[u] += size[v]
            if (size[v] > bestSize) {
                bestSize = size[v]
                heavy[u] = v
            }
        }
    }

    const head = new Int32Array(n)
    const pos = new Int32Array(n)
    let timer = 0
    const chains = [[0, 0]]

    while (chains.length) {
        const [start, h] = chains.pop()
        for (let u = start; u !== -1; u = heavy[u]) {
            head[u] = h
            pos[u] = timer++
            for (const v of adj[u]) {
                if (parent[v] === u && v !== heavy[u]) {
                    chains.push([v, v])
                }
            }
        }
    }


    const values = new Int32Array(n)
    for (let u = 0; u < n; u++) {
        values[pos[u]] = 1 << (s.charCodeAt(u) - 97)
    }

    let base = 1
    while (base < n) base <<= 1
    const seg = new Int32Array(base * 2)

    for (let i = 0; i < n; i++) seg[base + i] = values[i]
    for (let i = base - 1; i > 0; i--) {
        seg[i] = seg[i * 2] ^ seg[i * 2 + 1]
    }

    updateTree = function (p, value) {
        p += base
        seg[p] = value
        while (p > 1) {
            p >>= 1
            seg[p] = seg[p * 2] ^ seg[p * 2 + 1]
        }
    }

    rangeXor = function (l, r) {
        let result = 0
        l += base
        r += base
        while (l <= r) {
            if (l & 1) result ^= seg[l++]
            if (!(r & 1)) result ^= seg[r--]
            l >>= 1
            r >>= 1
        }
        return result
    }

    pathXor = function (u, v) {
        let mask = 0

        while (head[u] !== head[v]) {
            if (depth[head[u]] < depth[head[v]]) {
                [u, v] = [v, u]
            }

            mask ^= rangeXor(pos[head[u]], pos[u])
            u = parent[head[u]]
        }

        if (depth[u] > depth[v]) [u, v] = [v, u]
        mask ^= rangeXor(pos[u], pos[v])

        return mask
    }

    const answer = []

    for (const q of queries) {
        const parts = q.split(" ")

        if (parts[0] === "update") {
            const u = Number(parts[1])
            const c = parts[2]
            s = s.slice(0, u) + c + s.slice(u + 1)
            updateTree(pos[u], 1 << (c.charCodeAt(0) - 97))
        } else {
            const u = Number(parts[1])
            const v = Number(parts[2])
            const mask = pathXor(u, v)
            answer.push((mask & (mask - 1)) === 0)
        }
    }
    return answer
}

const n = 3, edges = [[0, 1], [1, 2]], s = "aac"
const queries = ["query 0 2", "update 1 b", "query 0 2"]

console.log(palindromePath(n, edges, s, queries))
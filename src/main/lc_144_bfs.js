function TreeNode(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
}

preorderTraversal = function (root) {
    const result = []

    function dfs(node) {
        if (node === null) return

        result.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    return result
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

console.log(preorderTraversal(root))
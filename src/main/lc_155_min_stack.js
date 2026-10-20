MinStack = function () {
    this.stack = []
    this.minStack = []
}

MinStack.prototype.push = function (val) {
    this.stack.push(val)

    const min = this.minStack.length === 0
        ? val
        : Math.min(val, this.minStack[this.minStack.length - 1])

    this.minStack.push(min)
}

MinStack.prototype.pop = function () {
    this.stack.pop()
    this.minStack.pop()
}

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
}

MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
}


const minStack = new MinStack()

minStack.push(-2)
minStack.push(0)
minStack.push(-3)

console.log(minStack.getMin())

minStack.pop()

console.log(minStack.top())
console.log(minStack.getMin()) 
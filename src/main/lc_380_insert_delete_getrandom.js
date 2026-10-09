RandomizedSet = function () {
    this.list = []
    this.map = new Map()
}

RandomizedSet.prototype.insert = function (value) {
    if (this.map.has(value)) {
        return false
    }
    this.map.set(value, this.list.length)
    this.list.push(value)
    return true
}

RandomizedSet.prototype.remove = function (value) {
    if (!this.map.has(value)) {
        return false
    }
    const index = this.map.get(value)
    const lastValue = this.list[this.list.length - 1]

    this.list[index] = lastValue
    this.map.set(lastValue, index)

    this.list.pop()
    this.map.delete(value)

    return true
}

RandomizedSet.prototype.getRandom = function () {
    const randomIndex = Math.floor(Math.random() * this.list.length)
    return this.list[randomIndex]
}

const obj = new RandomizedSet()

console.log(obj.insert(10))
console.log(obj.insert(20))
console.log(obj.insert(10))
console.log(obj.remove(10))
console.log(obj.remove(30))
console.log(obj.getRandom())
ProductOfNumbers = function () {
    this.prefix = [1]
}

ProductOfNumbers.prototype.add = function (num) {
    if (num === 0) {
        this.prefix = [1]
    } else {
        let last = this.prefix[this.prefix.length - 1]
        this.prefix.push(last * num)
    }
}

ProductOfNumbers.prototype.getProduct = function (k) {
    let n = this.prefix.length

    if (k >= n) return 0

    return this.prefix[n - 1] / this.prefix[n - 1 - k]
}

var product = new ProductOfNumbers()

product.add(3)
product.add(0)
product.add(2)
product.add(5)
product.add(4)

console.log(product.getProduct(2))
console.log(product.getProduct(3))
console.log(product.getProduct(4))
console.log(product.getProduct(5)) 
binarySearch = function (list, target) {
    let start = 0
    let end = list.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (list[mid] === target) {
            return mid
        }
        else if (list[mid] > target) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return -1
}

const list = [-1, 2, 6, 7, 11, 15]
const target = 2

console.log(binarySearch(list, target))
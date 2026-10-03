mostWaterContainer = function (heights) {
    let left = 0, right = heights.length - 1, maxArea = 0
    while (left < right) {
        let height = Math.min(heights[left], heights[right])
        let width = right - left
        let area = height * width
        maxArea = Math.max(maxArea, area)
        if (heights[left] < heights[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
}

heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(mostWaterContainer(heights))
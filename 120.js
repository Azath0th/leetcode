/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const len = triangle.length
  const result = triangle[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      result[j] = (triangle[i][j] + Math.min(result[j], result[j + 1]))
    }
  }
  return result[0]
}
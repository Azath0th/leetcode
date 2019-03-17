/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!(matrix.length && matrix[0].length)) {
    return []
  }
  const result = []
  let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1
  
  const _ = [
    () => {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])
      }
      top++
    },
    () => {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right])
      }
      right--
    },
    () => {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
    },
    () => {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++
    }
  ]

  let count = 0
  while (left <= right && top <= bottom) {
    _[count]()
    count = count === 3 ? 0 : count + 1
  }
  return result
}
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 0) {
    return []
  }
  const result = Array.from(Array(n)).map(() => Array(n))
  let left = top = 0, right = bottom = n - 1, count = 1
  const len = n * n
  const _ = [
    () => {
      for (let i = left; i <= right; i++) {
        result[top][i] = count++
      }
      top++
    },
    () => {
      for (let i = top; i <= bottom; i++) {
        result[i][right] = count++
      }
      right--
    },
    () => {
      for (let i = right; i >= left; i--) {
        result[bottom][i] = count++
      }
      bottom--
    },
    () => {
      for (let i = bottom; i >= top; i--) {
        result[i][left] = count++
      }
      left++
    }
  ]

  let i = 0
  while (count <= len) {
    _[i++ % 4]()
  }
  return result   
}
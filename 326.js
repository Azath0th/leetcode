/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let i = 1
  while (i < n) {
    i *= 3
  }
  return i === n
}
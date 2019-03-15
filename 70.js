/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 3) {
    return n
  }
  let before = 2, after = 3
  for (let i = 3; i < n; i++) {
    const temp = before + after
    before = after
    after = temp
  }
  return after
}
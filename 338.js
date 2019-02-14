/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const result = [0]
  for (let i = 1; i <= num; i++) {
    result.push(Array.prototype.reduce.call((i.toString(2)), (a, b) => {return b === '1' ? a + parseInt(b) : a}, 0))
  }
  return result
}
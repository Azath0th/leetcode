/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let flag = false
  if (x < 0) {
    x = -x
    flag = true
  }
  let result = x.toString().split('').reverse().join('')
  flag && (result = '-' + result)
  result = parseInt(result)
  return (result < -2147483648 || result > 2147483647) ? 0 : result
}
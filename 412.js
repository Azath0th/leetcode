/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let count1 = 1, count2 = 1, result = []
  for (let i = 1; i <= n; i++) {
    let temp = ''
    if (count1 === 3) {
      count1 = 0
      temp += 'Fizz'
    }
    if (count2 === 5) {
      count2 = 0
      temp += 'Buzz'
    }
    if (!temp) {
      temp += i
    }
    result.push(temp)
    count1++
    count2++
  }
  return result
}
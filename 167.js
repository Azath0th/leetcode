/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let obj = {}
  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i]
    if (diff in obj) {
      return [obj[diff], i + 1]
    }
    obj[numbers[i]] = i + 1
  }
  return []
};
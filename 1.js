/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[target - nums[i]] = i
  }
  for (let j = 0; j < nums.length; j++) {
    const element = nums[j]
    if (obj[element] !== undefined && j !== obj[element]) {
      return obj[element] > j ? [j, obj[element]] : [obj[element], j]
    }
  }
  return []
}
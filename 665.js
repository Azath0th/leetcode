/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  if (nums.length < 3) {
      return true
  }
  const len = nums.length
  let flag = true
  for (let i = 1; i < len; i++) {
      if (nums[i] < nums[i - 1]) {
          if (i === len - 1) {
              nums[i] = nums[i - 1]
          } else if (nums[i - 1] > nums[i + 1]) {
              nums[i - 1] = nums[i]
          } else {
              nums[i] = nums[i - 1]
          }
          flag = false
          break
      }
  }
  if (flag) {
      return true
  }
  let max = nums[0]
  for (let j = 1; j < len; j++) {
      if (nums[j] < max) {
          return false
      }
      max = nums[j]
  }
  return true
};
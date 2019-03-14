/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let i = 0, left = -1, right = nums.length
  while (i < right) {
    const num = nums[i]
    if (num === 0) {
      const temp = nums[i]
      nums[i++] = nums[++left]
      nums[left] = temp
    } else if (num === 2) {
      const temp = nums[i]
      nums[i] = nums[--right]
      nums[right] = temp
    } else {
      i++
    }
  }
  return nums
}
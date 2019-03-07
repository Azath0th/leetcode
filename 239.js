/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const len = nums.length
  if (len <= 1) {
    return nums
  }
  const win = [nums[0]], result = []
  for (let i = 1; i < k; i++) {
    const item = nums[i]
    for (let j = win.length - 1; j >= 0; j--) {
      item > win[j] && win.splice(j, 1)
    }
    win.push(item)
  }
  result.push(win[0])
  for (let i = k; i < len; i++) {
    win[0] === nums[i - k] && win.shift()
    const item = nums[i]
    for (let j = win.length - 1; j >= 0; j--) {
      item > win[j] && win.splice(j, 1)
    }
    win.push(item)
    result.push(win[0])
  }
  return result
}
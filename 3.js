/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length
  if (len <= 1) {
    return len
  }
  let max = 0
  let p = 0
  for (let i = 0; i < len; i++) {
    const char = s[i]
    const index = s.indexOf(char, p)
    if(index < i && ~index) {
      p = index + 1
    }
    const diff = index - p + 1
    if (max < diff) {
      max = diff
    }
  }
  return max
}
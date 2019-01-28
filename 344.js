/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const len = s.length
  if (len <= 1) {
    return
  }
  let start = 0
  let end = s.length - 1
  while(end > start) {
    const temp = s[start]
    s[start] = s[end]
    s[end] = temp
    start++
    end--
  }
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) {
    return true
  }
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let arr = []
  for (let i = 0; i < s.length; i++) {
    const len = arr.length
    if (len && map[arr[len - 1]] === s[i]) {
      arr.pop()
    } else {
      arr.push(s[i])
    }
  }
  return arr.length === 0
}
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let sign = '+'
  const stack = []
  const fn = {
    '+': n => stack.push(n),
    '-': n => stack.push(-n),
    '*': n => stack.push(stack.pop() * n),
    '/': n => stack.push(~~(stack.pop() / n))
  }
  const len = s.length
  for (let i = 0; i <= len; i++) {
    const char = s[i]
    if (char === ' ') {
      continue
    }
    if (/\d/.test(char)) {
      let num = parseInt(char)
      while (i + 1 < len && /\d/.test(s[i + 1])) {
        i++
        num = num * 10 + parseInt(s[i])
      }
      fn[sign] && fn[sign](num)
    } else {
      sign = char
    }
  }
  return stack.reduce((a, b) => a + b)
}
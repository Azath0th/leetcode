/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  s = '#' + s.split('').join('#') + '#'
  let RL = Array(s.length).fill(0)
  let MaxRight = 0
  let pos = 0
  let MaxLen = 0
  let MaxPos = 0
  for (let i = 0; i < s.length; i++) {
    if (i < MaxRight) {
      RL[i] = Math.min(RL[2 * pos - i], MaxRight - i)
    }
    else {
      RL[i] = 1
    }
    while (i - RL[i] >= 0 && i + RL[i] < s.length && s[i - RL[i]] == s[i + RL[i]]) {
      RL[i] += 1
    }
    if (RL[i] + i - 1 > MaxRight) {
      MaxRight = RL[i] + i - 1
      pos = i
    }
    if (MaxLen < RL[i]) {
      MaxLen = RL[i]
      MaxPos = i
    }
  }
  const start = MaxPos - MaxLen + 2
  const end = MaxPos + MaxLen - 2
  let result = ''
  for (let j = start; j <= end; j += 2) {
    result += s[j]
  }
  return result
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.replace(/\W/g, '').toLowerCase()
  return str === str.split('').reverse().join('')
}
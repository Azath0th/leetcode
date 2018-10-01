/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  var result = []
  A.forEach(function (element) {
      element % 2 === 0 ? result.unshift(element) : result.push(element)
  })
  return result
};
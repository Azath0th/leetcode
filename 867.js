/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  return A[0].map((column, i) => A.map(row => row[i]))
}
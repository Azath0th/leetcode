/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const result = []
  const node = root
  function order (node) {
    if (result.length === k) {
      return
    }
    if (node.left) {
      order(node.left)
    }
    result.push(node.val)
    if (node.right) {
      order(node.right)
    }
  }
  node && order(node)
  return result[k - 1]
}
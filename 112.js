/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean4c}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false
  }
  if (!root.left && !root.right) {
    return root.val === sum
  }
  const temp = sum - root.val
  return hasPathSum(root.left, temåp) || hasPathSum(root.right, temp)
}
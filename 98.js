/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) {
    return true
  }
  const node = root
  let last = -Infinity
  function travel (node) {
    if (node.left && !travel(node.left)) {
      return false
    }
    if (node.val <= last) {
      return false
    }
    last = node.val
    if (node.right && !travel(node.right)) {
      return false
    }
    return true
  }

  return travel(node)
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) {
    return []
  }
  const stack = [root]
  const result = []
  while (stack.length) {
    const node = stack.pop()
    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
    result.push(node.val)
  }
  return result.reverse()
}
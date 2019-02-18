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
var inorderTraversal = function(root) {
  let result = []
  if (!root) {
    return result
  }
  let stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    if (stack.length) {
      const tempNode = stack.pop()
      result.push(tempNode.val)
      root = tempNode.right
    }
  }
  return result
}
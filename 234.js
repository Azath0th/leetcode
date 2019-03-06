/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!(head && head.next)) {
    return true
  }
  let p1 = head
  let p2 = p1.next
  const stack = []
  while (p2 && p2.next) {
    stack.push(p1.val)
    p1 = p1.next
    p2 = p2.next.next
  }
  if (p2) {
    stack.push(p1.val)
  }
  p1 = p1.next
  while (p1) {
    if (p1.val !== stack.pop()) {
      return false
    }
    p1 = p1.next
  }
  return true
}
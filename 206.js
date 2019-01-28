/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let last = null
  let current = head
  while (current instanceof ListNode) {
    const temp = current.next
    current.next = last
    last = current
    current = temp
  }
  return last
}
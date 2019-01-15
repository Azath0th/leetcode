/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  let cursor = new ListNode(null)
  const result = cursor
  while(l1 && l2) {
    if (l1.val < l2.val) {
      cursor.next = l1
      l1 = l1.next
    } else {
      cursor.next = l2
      l2 = l2.next
    }
    cursor = cursor.next
  }
  if (l1) {
    cursor.next = l1
  }
  if (l2) {
    cursor.next = l2
  }
  return result.next
}
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
var insertionSortList = function(head) {
  if (!head) {
    return null
  }
  const result = new ListNode(null)
  let cur = result
  while (head) {
    if (cur.val > head.val) {
      cur = result
    }
    const next = head.next
    while (cur.next) {
      if (cur.next.val > head.val) {
        break
      }
      cur = cur.next
    }
    head.next = cur.next
    cur.next = head
    head = next
  }
  return result.next
}
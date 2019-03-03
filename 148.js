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
var sortList = function(head) {
  function sort (head) {
    if (!(head && head.next)) {
      return head
    }
    let p1 = head
    let p2 = head.next
    while (p2 && p2.next) {
      p1 = p1.next
      p2 = p2.next.next
    }
    p2 = p1.next
    p1.next = null
    return merge(sort(head), sort(p2))
  }

  function merge (p1, p2) {
    let head = new ListNode(null)
    let cur = head
    while (p1 && p2) {
      if (p1.val > p2.val) {
        cur.next = p2
        p2 = p2.next
      } else {
        cur.next = p1
        p1 = p1.next
      }
      cur = cur.next
    }
    if (p1) {
      cur.next = p1
    }
    if (p2) {
      cur.next = p2
    }
    return head.next
  }

  return sort(head)
}
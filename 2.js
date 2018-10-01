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
var addTwoNumbers = function (l1, l2) {
  const iterator = (node) => {
    return function () {
      if (node === null) {
        return null
      }
      const val = node.val
      node = node.next
      return val
    }
  }
  const n1 = iterator(l1)
  const n2 = iterator(l2)

  let next = 0
  let num1 = n1()
  let num2 = n2()
  let result = new ListNode(null)
  let last = result

  while (!(num1 === null && num2 === null)) {

    let temp = ~~num1 + ~~num2 + next
    if (temp >= 10) {
      temp %= 10
      next = 1
    } else {
      next = 0
    }
    last.next = new ListNode(temp)
    last = last.next
    num1 = n1()
    num2 = n2()
  }
  if (next === 1) {
    last.next = new ListNode(1)
  }

  return result.next
};
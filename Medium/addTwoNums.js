/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// singly linked list = (head)-next-> (value)-next-> (tail)-next-> null 

/* 
doubly linked list =  <-prev-(head)-next-> (value)-next-> (tail)-next-> null
                      null<-prev-(head)<-prev-(value)<-prev-(tail)-next-> null 
*/

let addTwoNumbers = function(l1, l2) {
    let arr1 = [], arr2 = [];

    while(l1 !== null) {
        // while l1 isnt equal to null, push into arr1
        arr1.push(l1.val);
        // after pushing we need l1 to now equal the next val in the list until we hit null
        l1 = l1.next;
    }

    // do the same thing for l2
    while(l2 !== null) {
        arr2.push(l2.val);
        l2 = l2.next;
    }

    // because they are stored in reverse order we have to reverse this - add the numbers up
    let result = String(BigInt(arr1.reverse().join('')) + BigInt(arr2.reverse().join(''))).split('').reverse();

    let newNode = new ListNode();
    let cur = newNode;   
    
    for(let i of result) {
        let node = new ListNode(i);
        cur.next = node;
        cur = node;
    }
    
    return newNode.next;

}
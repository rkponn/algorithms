/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {

    // create an object that will store the values of target - nums[i]
    let map = {};
    // loop through the nums array
    for (let i = 0; i < nums.length; i++) {
        // subtracting target from nums[i] will give us a number to find in the map
        let numberToFind = target - nums[i];

        // check the map to see if numberToFind exist - example 9 - 2 = 7
        let numberExist = map[numberToFind];
        if(numberExist !== undefined) {
            // if the number exists that means a pair was found
            return [numberExist, i]
        } else {
            // if the number doesnt exist we will add to the map
            map[nums[i]] = i; // example nums[i] = nums[0] -> 2, i is currently 0, so map = {'2': 0}
        }
    }
    return null;
}
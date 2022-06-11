/* 
Given a string s, find the length of the longest substring without repeating characters. 

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

/**
 * @param {string} s
 * @return {number}
 */

 var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let longest = 0;
    let hash = {};
    
    for(let i = 0; i < s.length; i++){
        if(hash[s[i]]){
            if(hash.get(s.charAt(i)) >= start){
                start=hash.get(s.charAt(i))+1;    
            }
        } 
        longest = Math.max(i-start+1, longest);
        hash.set(s.charAt(i), i);
    }
    return longest;
};
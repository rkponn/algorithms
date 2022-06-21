// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let strCount = {};
    let max = 0;
    let maxChar = ""

    for(let char of str) {
        strCount[char] ? strCount[char]++ : strCount[char] = 1;
    }

    for(let char in strCount) {
       if(strCount[char] > max) { 
        strCount[char];
        max = strCount[max];
        maxChar = char;
        };         
    }
    return maxChar
}

module.exports = maxChar;

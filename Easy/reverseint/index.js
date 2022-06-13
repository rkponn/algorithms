// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    let reverse = "";
    let nRev = String(n);
    for(let i = nRev.length - 1; i >= 0; i--) {
        reverse += nRev[i];
    }
    return parseInt(reverse) * Math.sign(n);


}

module.exports = reverseInt;

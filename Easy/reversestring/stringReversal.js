/* Reverse the string without using reverse method */

function revStr(str) {
    // Reverse without using built in method
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        newStr+= str[i]
    }

    return newStr;
}
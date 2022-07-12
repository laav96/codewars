// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


function doubleChar(str) {
// Create a var - empty string
let doubleString = '';

// Loop over all characters in String.
for(let i = 0; i < str.length; i++) {
    
// Add the character to the string var twice.
    doubleString += str[i] + str[i]
}
// Return the string var
return doubleString;
}
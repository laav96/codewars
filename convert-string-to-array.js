// Write a function to split a string and convert it into an array of words.

// Examples: "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
return string.trim().split(" ");
};
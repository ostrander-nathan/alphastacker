// first attempt wrap in function
function letterRow() {
    // For Loop starts with a - ends with z 
    for (var aa = 97; aa <= 122; aa++) {
        stackLetters = stackLetters + String.fromCharCode(aa);
    }
}
//defines var stackletters
var stackLetters = "";
// calls function letterRow to intiate
letterRow(stackLetters);
//displays all in list of stackLetters
console.log(stackLetters);
//displays all letter is 1 row 2 lines
console.log('stackLetters \nline two');
// concat letters with space
var myString = ["a" + "b" + "c" + "d" + "e \ f"];
console.log(myString);
// displays 2 letters from CharCode
console.log(String.fromCharCode(97, 98));
//STACK OF LETTERS THAT ACTUALLY WORKED 

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var letterString = "";
var newString = "";
var newStringSpaces = "";
for (var i = 0; i < alpha.length; i++) {
    letterString = letterString + alpha[i];
    console.log(letterString);
    var newString = letterString.replace(/(.{5})/g, '$1 ').trim();
    console.log(newString);
}

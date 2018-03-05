// Challenge #2_______________________________________________
// Sorting on planet Twisted-3-7
// There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: The values of the digits 3 and 7 are twisted. Our 3 means 7 and 7 means 3.

// Write some code that takes an array of numbers and outputs an array that changes any 3s to 7s and any 7s to 3s.

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
var challengeTwoInputB = [12,13,14];  //[12,17,14];
var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];
var challange2 = document.getElementById("challenge-2");
var answerArray = [];

for (i = 0; i < challengeTwoInputB.length; i++) {
  var numberStringArray = challengeTwoInputB[i].toString().split("");
  for (j = 0; j < numberStringArray.length; j++) {
    if (numberStringArray[j] == "3") {
      numberStringArray[j] = "7";
    } else if (numberStringArray[j] == "7") {
      numberStringArray[j] = "3";
    }
  }
  answerArray.push(parseInt(numberStringArray.join("")));
}
challange2.innerHTML += answerArray;


console.log("hello")


// Challenge #2: Sorting on planet Twisted-3-7
// There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: The values of the digits 3 and 7 are twisted. Our 3 means 7 and 7 means 3.

// Write some code that takes an array of numbers and outputs an array that changes any 3s to 7s and any 7s to 3s.

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
var challengeTwoInputB = [12,13,14];  //[12,17,14];
var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];

// var challange2 = document.getElementById("challenge-2");
// for(var i; i<challengeTwoInputA.length; i++){
//   var currentNumber = challengeTwoInputA[i].toString();
//   console.log(currentNumber);
//   if(challengeTwoInputA[i].includes("3")){
//     currentNumber[i].toString().replace(/3/g,"7");
//   }
//   else if(challengeTwoInputA[i]===7){
//     challengeTwoInputA[i].replace(/7/g, "3");
//   }
// }

var challenge2input = [9,8,7,234];

var challenge2swapped = [];

for (i = 0; i < challenge2input.length; i++) {
  
  // turns the number into a string and then splits the string
  var numberStringArray = challenge2input[i].toString().split("");
  

  // replaces 7s in the split string array with 3s and vice versa
  for (j = 0; j < numberStringArray.length; j++) {

    if (numberStringArray[j] == "3") {
      numberStringArray[j] = "7";
    } else if (numberStringArray[j] == "7") {
      numberStringArray[j] = "3";
    }

  }
  // joins the array back into a string, converts it to a number, and pushes it
  challenge2swapped.push(Number(numberStringArray.join("")));
}
var challange2 = document.getElementById("challenge-2");
challange2.innerHTML += challenge2swapped;


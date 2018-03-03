// Challenge #5: Array.diff_____________________________________________
// Given two arrays remove all values from array1 that are present in array2.

// Example 1:
var array1 = [1,2];
var array2 = [1];
//display = [2]

// Example 2:

var array1 = [1,2, 4, 7, 5, 9];
var array2 = [5, 9, 2];
//display = [1, 4, 7]
var resultArray = [];
var challenge5Answer = document.getElementById("challenge-5");

for(var b=0; b<array1.length; b++){
    if(array2.indexOf(array1[b]) ===-1){
      resultArray.push(array1[b]);
    }
}
challenge5Answer.innerHTML += "<h5>" + resultArray + "</h5>";

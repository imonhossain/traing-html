var name = "Popy sarkar";

var digree = "Bsc engineer";

var banglaMarks = 50;
var englishMarks = 80;
var mathMarks = 75; 
var totalMarks = banglaMarks + englishMarks + mathMarks;

var avarageMarks = totalMarks / 3;
var dateOfYear = 1995;
var currentYear = 2020;
var age = currentYear - dateOfYear;


function markCalculator(marks){
  if (marks >= 80) {
    return 5;
  } else if (marks >= 70) {
    return 4;
  } else if (marks >= 60) {
    return 3.5;
  } else if (marks >= 50) {
    return 3;
  } else if (marks >= 40) {
    return 2;
  } else if (marks >= 33) {
    return 1;
  } else {
    return 0;
  }
}
// console.log("bangla marks " );
var totalCgpa = 
console.log(markCalculator(mathMarks));
// console.log("english marks ");
// markCalculator(englishMarks);
// console.log("Math marks ");
// markCalculator(mathMarks);
// function ageCalculation(name, yearOfBirth){
//   console.log("My name is "+ name +", age is ", 2020 - yearOfBirth);
// }

// ageCalculation("Popy sarkar ", 1995);
// ageCalculation("Anik sarkar ", 1999);
// ageCalculation("Alamin ", 1994);
// var time = 7;
// if(time >=8){
//   console.log("Rouna hou");
// }


/*
console.log("my name is ", name);
console.log("my age is ", age);
console.log("my degree is ",digree);
console.log("Total marks ", totalMarks);
console.log("Agarage marks ", avarageMarks);
*/

// var pi = 3.14;
// var person = "John Doe";
// var answer = 'Yes I am!';
// console.log(answer);
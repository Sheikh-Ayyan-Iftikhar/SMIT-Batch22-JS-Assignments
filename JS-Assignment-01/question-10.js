var urdu = Number(prompt("Enter marks obtained in Urdu:"));

var english = Number(prompt("Enter marks obtained in English:"));

var math = Number(prompt("Enter marks obtained in Math:"));

var science = Number(prompt("Enter marks obtained in Science:"));

var computer = Number(prompt("Enter marks obtained in Computer:"));

var totalMarks = 500;

var obtainedMarks = urdu + english + math + science + computer;

var percentage = (obtainedMarks / totalMarks) * 100;


console.log("Total Marks: " + totalMarks);
console.log("Obtained Marks: " + obtainedMarks);
console.log("Percentage: " + percentage + "%");
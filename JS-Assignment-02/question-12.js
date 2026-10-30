var english = Number(prompt("Enter English Marks:"));
var maths = Number(prompt("Enter Mathematics Marks:"));
var science = Number(prompt("Enter Science Marks:"));
var computer = Number(prompt("Enter Computer Marks:"));
var urdu = Number(prompt("Enter Urdu Marks:"));  

if (english < 0 || english > 100 ||
    maths < 0 || maths > 100 ||
    science < 0 || science > 100 ||
    computer < 0 || computer > 100 ||
    urdu < 0 || urdu > 100) {


    console.log("Invalid Marks! Marks must be between 0 and 100.");


}
else
     {


    
    var obtainedMarks = english + maths + science + computer + urdu;
    var totalMarks = 500;
    var percentage = obtainedMarks / totalMarks * 100;
    var grade;

    

    if (percentage >= 90) {
    
        grade = "A+";
    
    }
    
    else if (percentage >= 80) {
        grade = "A";
    }

    
    
    else if (percentage >= 70) {
        grade = "B";
    }

    
    else if (percentage >= 60) {
        grade = "C";
    }

    
    else if (percentage >= 50) {
        grade = "D";
    }


    else {

        grade = "Fail";
         
    }  

    console.log("Total Marks: " + totalMarks);
    console.log("Obtained Marks: " + obtainedMarks);
    console.log("Percentage: " + percentage + "%");
    console.log("Grade: " + grade);

    if (english >= 40 && maths >= 40 &&
        science >= 40 && computer >= 40 && urdu >= 40) {

        console.log("Result: PASS");

    }
    else {

        console.log("Result: FAIL");
    }  

}
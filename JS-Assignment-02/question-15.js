var salary =  Number(prompt("Enter Basic Salary:"));
var years =   Number(prompt("Enter Years of Service:"));

var  bonusPercentage = 0;
var  taxPercentage = 0;

if (salary < 0 || years <  0)   
    {
       console.log("Invalid Input! Salary and years cannot be negative.");
}
else {




    if (years < 1) {
        bonusPercentage = 0;
    }
    else if (years <= 3) {
        bonusPercentage = 5;
    }
    else if (years <= 5) {
        
        bonusPercentage = 10;
 
    }
    else {
        bonusPercentage = 15;
    }



    if   (salary >= 100000) {
        taxPercentage = 5;
    } 
    else {  

        taxPercentage = 2;
    }

    var bonus = salary * bonusPercentage / 100;
      var tax = salary * taxPercentage / 100;
    var finalSalary = salary + bonus - tax;



    console.log ("Basic Salary: Rs. " + salary);
    console.log ("Bonus: Rs. " + bonus);
      console.log  ("Tax: Rs. " + tax);
    console.log("Final Salary: Rs. " + finalSalary);
}
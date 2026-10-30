var age =  Number(prompt("Enter your age:"));

var experience  = Number(prompt("Enter your years of experience:"));
 var javascript = prompt("Do you know JavaScript? (yes/no)");
 

if (age < 0 || experience < 0) {
    console.log("Invalid Input!");
}
else if (age >= 18 && age <= 30 && experience >= 1 && javascript == "yes") {
    console.log("Congratulations! You are eligible to apply.");
}
else {
    console.log("Sorry! You do not meet the requirements.");
}
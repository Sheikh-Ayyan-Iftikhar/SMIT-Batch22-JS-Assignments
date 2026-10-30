var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var sign = prompt("Enter operation (+, -, *, /):");

if (sign == "+") {

    alert("Answer: " + (num1 + num2));

}

else if (sign == "-") {

    alert("Answer: " + (num1 - num2) );  
}
else if (sign == "*") {
    alert("Answer:   " + (num1 * num2));
  
}
else if (sign == "/") {  

    if (num2 == 0) {
        alert(" Cannot divide  by zero!");
    } else {
        alert(" Answer: " + (num1 / num2));

    }
}
else {
    alert("Invalid  operation!");

}

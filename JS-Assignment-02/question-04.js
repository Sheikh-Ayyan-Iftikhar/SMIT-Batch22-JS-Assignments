var firstNum  = Number(prompt ("Enter your first number:"));



var secondNum  = Number( prompt("Enter your second number:"));


var  thirdNum = Number( prompt("Enter your third number:"));


if  (firstNum >=  secondNum && firstNum >= thirdNum) {

    console.log( firstNum  + " is the largest number.");

     

}
else if ( secondNum >=  firstNum && secondNum >= thirdNum) {

    console.log( secondNum + " is the largest number.");

}
else  {

     console.log( thirdNum + " is the largest number.");

}


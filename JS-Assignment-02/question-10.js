var balance = 25000;

var pin = Number(prompt("Enter your PIN:"));


var correctPin = 1234;


var amount = Number(prompt
    ("Enter withdrawal amount:"));

if (pin != correctPin) {
    console.log("Invalid PIN!");

}
else if (amount <= 0) { 
    
     console.log(" Invalid Amount!   Amount must be greater than zero.");
}


else if (amount > balance) {   
    console.log("Insufficient Balance!");

}
else if   (amount % 500 != 0) {
    console.log("Invalid Amount! Please enter a multiple of Rs. 500.");
}

else  
     {
    balance =  balance - amount;

    console.log ("Withdrawal Successful!");


    console.log  ("Withdrawn Amount: Rs. " + amount);
    console.log("  Remaining Balance: Rs. " + balance);  



}



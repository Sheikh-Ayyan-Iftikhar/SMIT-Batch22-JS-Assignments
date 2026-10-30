var age = Number (prompt("Enter your age:"));  
var   dayType = prompt ("Enter day type (weekday/weekend):");

var   ticketPrice = 0;  
var   surcharge = 0;

dayType   = dayType.toLowerCase();

if  (age < 0) {
      console.log("Invalid Age!");
}
else if   (dayType != "weekday" && dayType != "weekend") {
    console.log("Invalid Day Type!");
}
else   {

    if   (age < 5) {
        ticketPrice = 0;
    }  
    else if 
    (age <= 12) {
           ticketPrice = 300;
    }
    else if 
    (age <= 59) {
          ticketPrice = 700;
    }
    else {
          
          ticketPrice = 400;
    }

    if (dayType == "weekend" && age >= 5) {

        surcharge = 100;

    }

    var finalPrice = ticketPrice + surcharge;


    console.log("Base Ticket Price: Rs. " + ticketPrice);
    console.log("Weekend Surcharge: Rs. " + surcharge);
    console.log("Final Ticket Price: Rs. " + finalPrice);
}
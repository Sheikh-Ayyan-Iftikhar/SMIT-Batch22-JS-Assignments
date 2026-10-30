var units = Number(prompt("Enter units consumed:"));


var rate = 0;
var   serviceCharges = 150;

if (units < 0) 
    {

    console.log("Invalid Units!");
}
else {
    if (units <= 100) {
        rate = 10;

    }
    else if (units <= 200)
         {
        rate = 15;
    }
    else if (units <= 300) 
        {
        rate = 20;
    }
    else {
        rate = 25;
    }


    var electricityCharges = units * rate;

    var tax = electricityCharges * 5 / 100;

    var totalBill = electricityCharges + serviceCharges + tax;



    console.log("Electricity Charges: Rs. " + electricityCharges);
    console.log("Service Charges: Rs. " + serviceCharges);
    console.log("Tax: Rs. " + tax);
    console.log("Total Bill: Rs. " + totalBill);
}
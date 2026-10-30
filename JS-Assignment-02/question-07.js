var amount = Number(prompt("Enter your purchase amount:"));


var discount = 0;


if ( amount < 0) {

    
    console.log ("Invalid Purchase Amount!");

}

else if  (amount >= 10000) 
    {
    discount = 20;
}

else if  (amount >= 5000) {
    discount = 10;

}

else if (amount >= 2000)
     {
    discount = 5;

}

else  {

    discount =   0;
}

if  (amount >= 0) {


    var  discountAmount = amount * discount / 100;


    var  finalAmount = amount - discountAmount;

    console.log ("Original Amount: Rs. " + amount);
   
    console.log  ("Discount:  " + discount + "%");


    console.log  ("Discount Amount: Rs. " + discountAmount);


    console.log ("Final  Amount: Rs. " + finalAmount);
}





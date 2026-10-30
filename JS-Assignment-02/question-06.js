  var percentage = Number(prompt("Enter your percentage:"));
  

if (  percentage >= 90  && percentage <= 100){
      console.log ( "You have secured Grade A+.");
 }


  else if (percentage >= 80 && percentage < 90){

    console.log("You have secured Grade A.");
}  


else  if  (percentage  >= 70 && percentage < 80){
      console.log("You have secured Grade B.");
}


else if  ( percentage  >= 60  && percentage  < 70 ){
      console.log("You have secured Grade C.");
}

else  if   ( percentage >= 50 && percentage < 60){
      console.log("You have secured Grade D.");
}  

else if  
 (percentage < 0 || percentage > 100) {
      console.log ("Invalid Percentage!");
}

else   {
      console.log ( "You are Fail." );
}
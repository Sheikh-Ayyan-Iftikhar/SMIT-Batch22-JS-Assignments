
var correctUsername = "admin";
var correctPassword = "admin123" ;

var username = prompt  ("Enter your  username:");

var password = prompt ("Enter your password:");



if  (username != correctUsername) {



    console.log(" Invalid Username");
}

else  if (password != correctPassword) {
      
    console.log ("Invalid Password");


}
 
else {
    console.log ("Login  Successful! Welcome Admin.");
}

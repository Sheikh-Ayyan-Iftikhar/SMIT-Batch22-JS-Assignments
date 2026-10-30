var signal = prompt("Enter Traffic Signal Color:");

signal = signal.toLowerCase();



if (signal == "red") {
   
    console.log("Stop");
} 

else if (signal == "yellow") {
        console.log("Get Ready");
}
else   if (signal == "green") {
    
     console.log("Go");
}
else 
    {
      console.log("Invalid Signal");

}

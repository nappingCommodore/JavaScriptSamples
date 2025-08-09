function handleCLick() {
    console.log("Clicked!");
   // alert("Hello World from script file!");
   prompt("Agree to the terms and conditions?"); // Example of a confirmation dialog
   var url = "https://www.example.com?query='example text'&name=test";
   console.log(encodeURI(url)); // Encoding the URL
}

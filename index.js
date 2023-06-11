var count = 0;
var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    count++;
    myButton.innerText = "clicked " + count + " times";
  });
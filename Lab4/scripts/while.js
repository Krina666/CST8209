function getNumber(){
var choice = prompt("Enter a number between 0 and 100","");
var i = 0;

while (i <= choice) {
  document.writeln( "The value of the index is " + i + "</br>");
  i += 10;
 }
}
getNumber();

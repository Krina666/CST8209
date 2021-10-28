var min = Number(prompt("Please enter the minimum value",""));
var max = Number(prompt("Please enter the maximun value",""));
var increase = Number(prompt("Plaese enter the increase value",""));


if (min <= max){

  for (var i = min; i < max; i += increase){
  document.writeln( "The value of the index is " + i + "</br>");
  }
}

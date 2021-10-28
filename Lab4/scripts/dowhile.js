function guessTheNumber(){

  var secret = 3 ;
  var guess = prompt("Please enter you guess between 0 and 10","");

  do{
    guess = prompt("Guess wrong, please try again","")
  }
  while (guess != secret)

  document.writeln("Congratulations! You guessed the right number!")
}
guessTheNumber();

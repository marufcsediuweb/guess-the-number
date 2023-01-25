let actualNumber = Math.random() * 100;
actualNumber = Number.parseInt(actualNumber);
let userInput;
let score = 100;

while( userInput != actualNumber ){

  score = score - 1;
  userInput = prompt("Guess The Number: ");
  
  if ( userInput == actualNumber ) {
    console.log(`Congrats! You guess the correct number.`);
    console.log(`Your score is: ${100 - score}`);
  } else if (userInput > actualNumber && userInput < 100) {
    console.log(`You're wrong :( You just guess greater than the correct number. Try again!`);
  } else if (userInput < actualNumber && userInput > 0) {
    console.log(`You're wrong :( You just guess lower than the correct number. Try again!`);
  } else {
    console.log(`You entered ${userInput}. Please enter between 1 to 100.`);
  }
 
}

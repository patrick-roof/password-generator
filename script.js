// Assignment code here
var password = document.getElementById("password");

//array here?
var userChoice = [];

var pwChoices = [];

var finalPass = [];

var lowercaseArray = ['a','b','c','d','e','f','g'];

var uppercaseArray = ['A','B','C','D','E','F','G'];

var numbersArray = ['1','2','3','4','5','6','7'];

var symbolsArray = ['!','@','#','$','%','^','&'];


function generatePassword() {

  var choiceLength = window.prompt ("Choose a length for the password between 8 and 128");

  var lowercase = window.confirm("Click OK to include lowercase");
  
  var uppercase = window.confirm("Click OK to include uppercase");
 
  var numbers = window.confirm("Click OK to include numbers");
  
  var symbols = window.confirm("Click OK to include symbols/special characters");
 

  function getRandomLower() {
    if (lowercase === true) {
      var rnd = (Math.floor(Math.random() * lowercaseArray.length));
      pwChoices.push(lowercaseArray[rnd]);
      console.log(pwChoices);
      userChoice = userChoice.concat(lowercaseArray);
      console.log(userChoice);
    }
  }
  getRandomLower();


  function getRandomUpper() {
    if (uppercase === true) {
      var rnd = (Math.floor(Math.random() * uppercaseArray.length));
      pwChoices.push(uppercaseArray[rnd]);
      console.log(pwChoices);
      userChoice = userChoice.concat(uppercaseArray);
      console.log(userChoice);
    }
  }
  getRandomUpper();


  function getRandomNumber() {
    if (numbers === true) {
      var rnd = (Math.floor(Math.random() * numbersArray.length));
      pwChoices.push(numbersArray[rnd]);
      console.log(pwChoices);
      userChoice = userChoice.concat(numbersArray);
      console.log(userChoice);
    }
  }
  getRandomNumber();


  function getRandomSymbol() {
    if (symbols === true) {
      var rnd = (Math.floor(Math.random() * symbolsArray.length));
      pwChoices.push(symbolsArray[rnd]);
      console.log(pwChoices);
      userChoice = userChoice.concat(symbolsArray);
      console.log(userChoice);
    }
  }
  getRandomSymbol();

  // function getRandomUpper() {
  //   if (uppercase == true) {
  //     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  //   }
  // }

  // function getRandomNumber() {
  //   if (numbers == true) {
  //     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  //   }
  // }

  // function getRandomSymbol() {
  //   var symbols = '!@#$%^&*(){}[]=<>/,.';
  //   if (symbols == true) {
  //     return symbols[Math.floor(Math.random() * symbols.length)];
  //   }
  // }

  // var typesCount = hasLower + hasUpper + hasNumbers + hasSymbols;
  // var typesArray = [{ hasLower }, { hasUpper }, { hasNumbers }, { hasSymbols }].filter
  // (
  //   item => Object.values(item)[0]
  // );



  for (var i = 0; i < choiceLength; i++) {
    var rnd = (Math.floor(Math.random() * userChoice.length))
    finalPass.push(userChoice[rnd])
    var generatedPassword = finalPass.join("");
  }
  console.log(finalPass);

  return generatedPassword;

}

var generatedPassword = "";



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

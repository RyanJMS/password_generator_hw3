// Assignment Code

//Prompt for User Password Length

//Initializing 4 char sets for future user confirms
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const special = "!@#$%^&*()";

//Init passLength to hold password length
let passLength;

//Init charSet to hold character set determined by user confirms

//Init user confirms
let confirmLower;
let confirmUpper;
let confirmNumbers;
let confirmSepcial;

//If user input = true, add it to charSet
function generatePassword() {
  let pass = "";
  let charSet = "";
  //Take user prompt and convert to integer
  passLength = parseInt(
    prompt(
      "How many characters do you want your password to be? (Must be between 8 and 128)"
    )
  );

  //Make sure the condition only runs if the user inputs a length between 8 and 128
  //If passLength is less than 8 and greater than 128, alert user to try again, restart function
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Please enter a number between 8 and 128");
    passLength = parseInt(
      prompt(
        "How many characters do you want your password to be? (Must be between 8 and 128)"
      )
    );
  }
  //If a user enters something that is not a number, alert user to try again, restart function

  {
    //User confirms

    confirmLower = confirm("Do you want lowercase letters?");
    confirmUpper = confirm("Do you want uppercase letters?");
    confirmNumbers = confirm("Do you want numbers?");
    confirmSpecial = confirm("Do you want special characters?");

    //If user confirm = true, add to charSet
    if (confirmLower === true) {
      charSet += lowerCase;
    }
    if (confirmUpper === true) {
      charSet += upperCase;
    }
    if (confirmNumbers === true) {
      charSet += numbers;
    }
    if (confirmSpecial === true) {
      charSet += special;
    }
    //If a user selects nothing
    if (
      confirmLower === false &&
      confirmUpper === false &&
      confirmNumbers === false &&
      confirmSpecial === false
    ) {
      alert("Please select a chacter type");
    } else {
      //Loop until passLength is reached, pass(final password) takes charset (as determined by user) and randomizes to the length of the charset
      for (let i = 0; i < passLength; i++) {
        pass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      //returns the final password
    }
  }

  return pass;
}

//Generate password Button
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

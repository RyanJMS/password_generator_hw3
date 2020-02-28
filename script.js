// Assignment Code

//Prompt for User Password Length


//Initializing 4 char sets for future user confirms
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

//Init passLength to hold password length
let passLength
//Initial charSet with no value
//Will push values to array if user confirm boolean = true
let charSet = []

//Init pass which will hold the final password
let pass = ""


//Init user confirms
let confirmLower
let confirmUpper
let confirmNumbers
let confirmSepcial




//If user input = true, add it to charSet
function generatePassword() {
  
  passLength = prompt("How many characters do you want your password to be? (Must be between 8 and 128)")

  if (passLength > 8 || passLength < 128) {

    confirmLower = confirm("Do you want lowercase letters?")
    confirmUpper = confirm("Do you want uppercase letters?")
    confirmNumbers = confirm("Do you want numbers?")
    confirmSpecial = confirm("Do you want special characters?")
    
  if (charLower === true) {
    charSet.push(lowerCase)
  }
  if (charUpper === true) {
    charSet.push(upperCase)
  }
  if (charNum === true) {
    charSet.push(numberChar)
  }
  if (charSpec === true) {
    charSet.push(specialChar)
  }
  else {
    
    
}

}
else {
  alert("Please enter a number between 8 and 128")
  generatePassword()
}
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

// Assignment code here
const passwordCharacters = {
  lowerCaseLetters: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  upperCaseLetters: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],

  numerals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  specialCharacters: [
    " `",
    " !",
    " @",
    " #",
    " $",
    " %",
    " ^",
    " &",
    " *",
    " -",
    " _",
    " +",
    " =",
    " <",
    " >",
    " . ",
    " ? ",
  ],
};

function askPasswordLength() {
  let response = Number(
    prompt("How many characters should your password be? (8-128 characters)")
  );
  if (response < 8 || response > 128) {
    alert("Your password must be longer than 8 characters but less than 128!");
    askPasswordLength();
  } else {
    console.log(response);
    return response;
  }
}

function passwordCriteriaPrompt() {
  const passwordLength = askPasswordLength();
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

//console.log(passwordCharacters);

function generatePassword() {}
// Write password to the #password input
function writePassword() {
  let password = passwordCriteriaPrompt();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

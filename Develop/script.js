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
    let newResponse = askPasswordLength();
    return newResponse;
  } else {
    console.log(response);
    return response;
  }
}

const passwordArray = [];

function createArray(response, characters) {
  if (response) {
    for (let i = 0; i < characters.length; i++) {
      passwordArray.push(characters[i]);
    }
  }
}

function randomPasswordGenerator(array, amount) {
  let generatedPassword = [];
  for (let i = 0; i < amount; i++) {
    let randomCharacter = array[Math.floor(Math.random() * array.length)];
    generatedPassword.push(randomCharacter);
  }
  passwordArray.length = 0;
  return generatedPassword;
}

function generatePassword() {
  const passwordLength = askPasswordLength();

  const responseUppercase = confirm(
    "Do you want uppercase letters in your password?"
  );
  createArray(responseUppercase, passwordCharacters.upperCaseLetters);

  const responseLowercase = confirm(
    "Do you want lowercase letters in your password?"
  );
  createArray(responseLowercase, passwordCharacters.lowerCaseLetters);

  const responseNumerals = confirm("Do you want numerals in your password?");
  createArray(responseNumerals, passwordCharacters.numerals);

  const responseSpecialCharacters = confirm(
    "Do you want special characters in your password?"
  );
  createArray(responseSpecialCharacters, passwordCharacters.specialCharacters);

  console.log(passwordArray);

  let randomPasswordArray = randomPasswordGenerator(
    passwordArray,
    passwordLength
  );

  console.log(randomPasswordArray);

  randomPassword = randomPasswordArray.join("");

  console.log(randomPassword);

  return randomPassword;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

//console.log(passwordCharacters);

// Write password to the #password input
let passwordText = document.querySelector("#password");
function writePassword() {
  if (passwordText.value === "") {
    let password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
    writePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

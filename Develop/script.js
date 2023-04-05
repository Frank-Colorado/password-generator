// Assignment code here

// This is an object called passwordCharacters
// It has 4 keys which contain an array as the value
// These keys will be used to create a random password

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
// This is a function called 'askPasswordLength'
// It has 0 arguments
// Does: It asks the user how many characters they want the password to be. If their answer is between 8 and 128 then it will return the answer.
//       If this condition is not met then the function will run again and return the new answer
function askPasswordLength() {
  let response = Number(
    prompt("How many characters should your password be? (8-128 characters)")
  );
  if (response < 8 || response > 128) {
    alert("Your password must be longer than 8 characters but less than 128!");
    return askPasswordLength();
  } else {
    return response;
  }
}

// This is an empty array called 'passwordArray'
// This array will be filled throughout the 'generatePassword' according to the criteria of the users input
let passwordArray = [];

// This is a function called 'createArray'
// It has 2 arguments called 'response' and 'characters'
// Does: If the value of the argument 'response' is truthy then the function grabs the indicated key from the 'passwordCharacters' object and fills the 'passwordArray' array.
//       If the 'response' is falsy then nothing is returned
function createArray(response, characters) {
  if (response) {
    for (let i = 0; i < characters.length; i++) {
      passwordArray.push(characters[i]);
    }
  }
}

// This is a function called 'randomPasswordGenerator'
// It has 2 arguments called 'array' and 'amount'
// Does: It pulls a random item from a specified 'array' and adds it to a new array called 'generatedPassword'. It will continue to pull a random item and fill this array for a specified 'amount'.
//       It will then set the glob array 'passwordArray' length to 0 and return the array 'generatedPassword'
function randomPasswordGenerator(array, amount) {
  let generatedPassword = [];
  for (let i = 0; i < amount; i++) {
    let randomCharacter = array[Math.floor(Math.random() * array.length)];
    generatedPassword.push(randomCharacter);
  }
  passwordArray.length = 0;
  return generatedPassword;
}

// This is a function called 'generatePassword'
// It has 0 arguments
// Does: It will call the 'askPasswordLength' function and set the value to a variable called 'passwordLength'
//       It will then initiate a series of confirmation prompts. The 'createArray' function is then called and the values of the confirmation prompts will be used as arguments for the function.
//       It will then initiate the criteriaCheck confirmation prompt. If this returns a truthy value then It will call the function randomPasswordGenerator which will use the global array 'passwordArray' and the variable 'passwordLength' as arguments. The returned value will be stored in a variable called 'randomPasswordArray'
//       If this returns a truthy value then It will call the function randomPasswordGenerator which will use the global array 'passwordArray' and the variable 'passwordLength' as arguments. The returned value will be stored in a variable called 'randomPasswordArray'
//       If this returns a falsey value then it will set the global array 'passwordArray' to [] and then recall the 'generatePassword' function and return its value.
//       It will then turn the returned array into a string with no spacing and store the value in a variable called 'randomPassword'.
//       It will then return the variable 'randomPassword' to where the function was called.
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

  const criteriaCheck = confirm(
    "Are you sure about all the criteria for your password?"
  );
  if (criteriaCheck) {
    randomPasswordArray = randomPasswordGenerator(
      passwordArray,
      passwordLength
    );
  } else {
    passwordArray = [];
    return generatePassword();
  }

  console.log(randomPasswordArray);
  randomPassword = randomPasswordArray.join("");

  return randomPassword;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
let passwordText = document.querySelector("#password");

// This is a function called 'writePassword'
// It has 0 arguments
// Does: This function will be called when generateBtn is clicked. If the value of the variable 'passwordText' is '' then the 'generatePassword' function will be called.
//       The returned value will be stored in a variable called 'password'. The value of the 'passwordText' variable will then be set to the value of 'password'
//       If the value of the variable 'passwordText' is not '' then its value is set to '' and the function is called again.
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

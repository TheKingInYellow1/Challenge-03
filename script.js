// Assignment Code
var generateBtn = document.querySelector("#generate");

document.querySelector("#getLength").addEventListener("change", function() {
  var minLength = 8;
  var maxLength = 128;
  var inputLength = parseInt(this.value);
  if (inputLength < minLength) this.value = minLength;
  if (inputLength > maxLength) this.value = maxLength;
});

// Write password to the #password input
function generatePassword(length) {
  var result = "";
  var characters = "";
  if (document.querySelector("#lowercase").checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (document.querySelector("#uppercase").checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.querySelector("#numbers").checked) {
    characters += "0123456789";
  }
  if (document.querySelector("#specialCharacters").checked) {
    characters += "`~!@#$%^&*()-_=+[{]}\\|;:\'\",<.>/?";
  }
  if (characters === "") return;
  var counter = 0;
  while (counter < length) {
    result += characters[Math.floor(Math.random() * characters.length)];
    counter += 1;
  }
  return result;
}

function writePassword() {
  var password = generatePassword(document.querySelector("#getLength").value);
  var passwordText = document.querySelector("#password");
  if (password === undefined) {
    passwordText.value = "";
    return;
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

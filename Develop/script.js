// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordPrompt = prompt("Choose a password length between 8-128 characters");
var passwordLength = parseInt(passwordPrompt, 10);
var characters = prompt("Choose lowercase, uppercase, numeric, or special characters"); 

console.log(passwordLength); 
console.log(passwordPrompt); 
console.log(characters); 

// prompt asking for password length
function confirmLength() {
  if (passwordLength <= 128 && passwordLength >= 8) {
    alert("Thank you"); 
   } else {
     parseInt(prompt("Choose a password length between 8-128 characters")); 
   } 
}

confirmLength (); 

// prompt asking for characters BROKEN 
function confirmCharacters () {
  if (characters === "lowercase" || "uppercase" || "numeric" || "special characters") {
    alert("Thank you"); 
   } else {
     prompt("Choose lowercase, uppercase, numeric, or special characters"); 
   }
}

confirmCharacters(); 

// function to generate password
function generatePassword() {
  var length = passwordLength,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

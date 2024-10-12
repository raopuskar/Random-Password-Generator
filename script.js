const passBox = document.getElementById("pass");
const length = 15;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChar = "!@#$%^&*()_+{}|<>?";

const allChar = upperCase + lowerCase + number + specialChar;

function generateRandon(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while(length>password.length){     //this will generate all other random password after generating the above 4 password
        password += allChar[Math.floor(Math.random() * allChar.length)];

    }
    passBox.value = password;

}
//this will copy the text
function copyPassword(){
    passBox.select();     //this will select the text in html
    document.execCommand("copy");
}
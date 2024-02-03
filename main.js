let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
//This is for everytime the end user clicks submit!
let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");

if (username.value == "" || password.value == "" || email.value == "") {
    alert("Ensure you enter the appropriate information for each field!");
} else {
    alert("Thank you for successfully creating an account.");
    console.log('This form has a username of ${username.value} and password of ${password.value} and an email of ${email.value}');

    username.value = "";
    password.value = "";
    email.value = "";
    }
});


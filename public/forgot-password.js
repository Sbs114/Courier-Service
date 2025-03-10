function validateForm() {
    var email = document.getElementById("email").value;
    var valid = true;

    // Validate email
    if (!validateEmail(email)) {
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!email.match(mailformat)) {
        alert("Please enter a valid email address!");
        return false;
    }
    return true;
}

function generatePassword() {
    var length = 8; // Password length
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/~"; // Characters to include in password
    var password = "";

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}

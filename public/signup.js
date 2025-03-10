$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    $('#show-password').click(function() {
        var passwordInput = $('#password');
        var icon = $(this).find('i');
        if (passwordInput.attr('type') === 'password') {
            passwordInput.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            passwordInput.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
    $('#sfrm').submit(function(e) {
        e.preventDefault();
        if (formValidation()) {
            this.submit();
        }
    });
});
function formValidation() {
    var fname = $('#firstname').val();
    var lname = $('#lastname').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var dob = $('#dob').val();
    var id = $('#identification').val();
    var tnc = $('#tnc').prop('checked');
    var gender = $("input[name='gender']:checked").length > 0;
    if (validateFirstName(fname)) {
        if (validateLastName(lname)) {
            if (validateEmail(email)) {
                if (validatePassword(password)) {
                    if (validateDOB(dob)) {
                        if (validateID(id)) {
                            if (tnc) {
                                if (gender) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    alert('Form submission failed. Please check the entered information.');
    $('#sfrm')[0].reset(); 
    return false;
}
function validateFirstName(fname) {
    var alpha_space = /^[a-zA-Z\s]*$/;
    return alpha_space.test(fname);
}
function validateLastName(lname) {
    var alpha_period = /^[a-zA-Z\. ]*$/;
    return alpha_period.test(lname);
}
function validateEmail(email) {
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return mailformat.test(email);
}
function validatePassword(password) {
    var pwdformat = /^([a-zA-Z0-9]){8,20}+$/;
    return pwdformat.test(password);
}
function validateDOB(dob) {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18;
}
function validateID(id) {
    return id !== "Default";
}
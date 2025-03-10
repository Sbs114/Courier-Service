function validateForm() {
    const nameRegex = /^[a-zA-Z]+$/;
    const pinRegex = /^\d{6}$/;     
    const phoneRegex = /^\d{10}$/;  
    const firstName = document.getElementById("_Fname").value;
    const lastName = document.getElementById("_Lname").value;
    const pinCode = document.getElementById("_pin").value;
    const contactNo = document.getElementById("_num").value;

    if (!nameRegex.test(firstName)) {
        alert("Please enter a valid first name (only alphabetic characters).");
        return false;
    }

    if (!nameRegex.test(lastName)) {
        alert("Please enter a valid last name (only alphabetic characters).");
        return false;
    }

    if (!pinRegex.test(pinCode)) {
        alert("Please enter a valid 6-digit pin code.");
        return false;
    }

    if (!phoneRegex.test(contactNo)) {
        alert("Please enter a valid 10-digit contact number.");
        return false;
    }

    const deliveryTimes = document.querySelectorAll('input[type="checkbox"][name="_time1"]:checked');
    if (deliveryTimes.length === 0) {
        alert("Please select at least one delivery time.");
        return false;
    }

    return true;
}

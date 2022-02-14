function setError(id, error) {
    // Set error inside tag of id
    console.log(id, error);
    document.getElementById(id).innerHTML = error;

}

function clearError() {
    let errors = document.getElementsByClassName('formError');
    for (let item of errors) {
        item.innerHTML = "";
    }
}


function validateForm() {
    var returnval = true;
    clearError();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        setError("xname", "*Length of name is too short");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length < 11) {
        setError("xemail", "*Length of email is too short");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        setError("xphone", "*Phone no. should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {
        setError("xpass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var c_password = document.forms['myForm']["fc_pass"].value;
    if (c_password != password) {
        setError("xc_pass", "*Password and Confirm password doesn't match!");
        returnval = false;
    }





    return returnval;
}

function FireOnSubmit() {
    if (validateForm() == true) {
        alert("Form is submitted Successfully");
        return true;
    } else {
        return false;
    }

}
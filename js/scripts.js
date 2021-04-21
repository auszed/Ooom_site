//we call the ID of the elemnts from the sign up file
const pass1 = document.getElementById('inputPassword');
const pass2 = document.getElementById('inputPasswordvalidation');
const firstName = document.getElementById('firstName');
const surname = document.getElementById('surname');
const mail = document.getElementById('inputEmailLogin');

//we get activate the button for sign up
const btnVerify = document.getElementById('submitSignUp');
btnVerify.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputsSignUp();
});

function checkInputsSignUp() {
    //get the values from the inputs
    // .trim() remove white spaces
    let pass1Value = pass1.value.trim();
    let pass2Value = pass1.value.trim();
    let surnameValue = surname.value.trim();
    let firstNameValue = firstName.value.trim();
    let mailValue = mail.value.trim();


    //code is working here
    console.log(mailValue);
    console.log(surnameValue);
    console.log(firstNameValue);
    console.log(pass1Value);
    console.log(pass2Value);



    //verify Name
    if (firstNameValue === '') {
        //show error
        setErrorFor(firstName, 'You need to enter your name');
    } else {
        //add success class
        setSuccessFor(firstName);
    }

    //verify Surname
    if (surnameValue === '') {
        //show error
        setErrorFor(surname, 'You need to enter your surname');
    } else {
        //add success class
        setSuccessFor(surname);
    }

    //verify mail
    if (mailValue === '') {
        setErrorFor12col(mail, 'Email cannot be blank');
    } else if (!isEmail(mailValue)) {
        setErrorFor12col(mail, 'Not a valid email');
    } else {
        setSuccessFor12col(mail);
    }

    //verify password
    if (pass1Value === '') {
        setErrorFor(pass1, 'Password cannot be blank');
    } else if(!passwordMail(pass1Value)){
        setErrorFor(pass1, 'Your password must be at least 8 characters long and is case-sensitive');
    }else {
        setSuccessFor(pass1);
    }


    if (pass2Value === '') {
        setErrorFor(pass2, 'Passwords cannot be blank');
    } else if(!passwordMail(pass2Value)){
        setErrorFor(pass2, 'Your password must be at least 8 characters long and is case-sensitive');
    }else if (pass2Value !== pass2Value) {
        setErrorFor(pass2, 'Passwords does not match');
    } else {
        setSuccessFor(pass2);
    }

}



/*--------------*/

//login elements
const loginMail = document.getElementById('LoginMail');
const loginPass = document.getElementById('LoginPassword');

//we activate the btn for login
const loginbtnVerify = document.getElementById('LoginSubmit');
loginbtnVerify.addEventListener('click', (e) => {
    e.preventDefault();
    checkInputsLogin();
});


function checkInputsLogin() {
    //get the values from the inputs
    // .trim() remove white spaces
    let mailValue = loginMail.value.trim();
    let pass1Value = loginPass.value.trim();

    //code is working here
    console.log(mailValue);
    console.log(pass1Value);



    //verify mail
    if (mailValue === '') {
        setErrorFor12col(loginMail, 'Email cannot be blank');
    } else if (!isEmail(mailValue)) {
        setErrorFor12col(loginMail, 'Not a valid email');
    } else {
        setSuccessFor12col(loginMail);
    }

    //verify password
    if (pass1Value === '') {
        setErrorFor12col(loginPass, 'Password cannot be blank');
    } else if(!passwordMail(pass1Value)){
        setErrorFor12col(loginPass, 'Your password must be at least 8 characters long and is case-sensitive');
    }
    else {
        setSuccessFor12col(loginPass);
    }


}

/*--------------------*/
// error for  row 6
function setErrorFor(input, message) {
    //we add the class to the parent
    let formControl = input.parentElement;
    
    // we select the element small in the site
    let selection = formControl.querySelector("small");
    formControl.className = 'form-group col-md-6 error';

    //add the class in-nvalid
    input.classList.add("is-invalid");

    //add error messafe inside small
    selection.innerText = message;
    selection.style.visibility = "visible";
}


function setSuccessFor(input) {
    input.classList.remove('is-invalid');
    
    
    //we select the parent item
    let formControl = input.parentElement;

    //select small
    let selection = formControl.querySelector("small");

    //hide the small element
    selection.style.visibility = "hidden";

    //we add the class
    formControl.className = 'form-group success col-md-6';
}

// error for  row 12
function setErrorFor12col(input, message) {
    //we add the class to the parent
    let formControl = input.parentElement;

    // we select the element small in the site
    let selection = formControl.querySelector("small");
    formControl.className = 'form-group col-md-12 error';
  

    //add the class in- valid
    input.classList.add("is-invalid");
    input.classList.add("error");

    //add error messafe inside small
    selection.innerText = message;
    selection.style.visibility = "visible";
}


function setSuccessFor12col(input) {
    //remove invalid
    input.classList.remove('is-invalid');

    //we select the parent item
    let formControl = input.parentElement;
    //we select the small tag
    let selection = formControl.querySelector("small");

    //we add the class
    formControl.className = 'form-group success col-md-12';

    //hide the small element
    selection.style.visibility = "hidden";
}


//verify the mail with regex
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//verify the mail with regex
function passwordMail(passwordVerification) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(passwordVerification);
}
















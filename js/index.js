//-Client wants a contact form that willl not submit unless all fields are completed
        //-create form in html <form name="contactForm" action="" onsubmit="return validateForm()">
        //-style using css
        //-call function "validateForm"
            //-if null -->Alert
            //-return false
            //-else if statement to validate whether or not user is a bot. return false if wrong answer


//first name and last name required. 
//user must validate that they are not a bot
//if conditions are not met, the form will not be submitted

function validateForm() {
    var fname = document.forms["contactForm"]["fname"].value;
    var sname = document.forms["contactForm"]["sname"].value;
    var validate = document.forms["contactForm"]["validate"].value;

//if info is not filled in(null), an alert will pop up.
//validate: if security question is not answered right, an alert will pop up and the form will not submit until answered correctly.
    if (fname == null || fname == "") {
        alert("Let's get on a First Name basis...");
        return false;
    } else if (sname == null || sname == "") {
        alert("Don't forget your Surname!");
        return false;
    } else if (validate != "No") {
        alert("Beep Boop. Humans only.");
        return false;
    }
}

//user completes form with all required fields
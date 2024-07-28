const uname = document.getElementById("uname")
const mail = document.getElementById("mail")
const pass = document.getElementById("pass")
const sbtn = document.getElementById("sbtn")
const genmale = document.getElementById("genmale")
const genfemale = document.getElementById("genfemale")


var nameerror = document.getElementById("nameerror")
var mailerror = document.getElementById("mailerror")
var passerror = document.getElementById("passerror")
var generror = document.getElementById("generror")


function valid() {


    //name validation
    var unamev = true

    if (uname.value === "" || uname.value == null) {
        unamev = false
        nameerror.innerHTML = "Name is required!"
        nameerror.style.color = "red"
    }

    else {
        unamev = true
        nameerror.innerHTML = "Valid"
        nameerror.style.color = "yellowgreen"
    }



    //mail validation
    var mailcheck = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,4})$/
    var mailv = true
    if (mail.value === "" || mail.value == null) {
        mailv = true
        mailerror.innerHTML = "Email is required!"
        mailerror.style.color = "red"
    }

    else if (!mail.value.match(mailcheck)) {
        mailv = true
        mailerror.innerHTML = "Enter valid mail"
        mailerror.style.color = "red"
    }
    else {
        mailv = true
        mailerror.innerHTML = "Valid"
        mailerror.style.color = "yellowgreen"
    }

    //password validation
    var passv = true
    if (pass.value === "" || pass.value == null) {
        passv = false
        passerror.innerHTML = "required!"
        passerror.style.color = "red"
    }

    else if (pass.value === "password") {
        passv = false
        passerror.innerHTML = "password cannot be password"
        passerror.style.color = "red"
    }

    else if (pass.value.length < 8) {
        passv = false
        passerror.innerHTML = "Minimum 8 charecters"
        passerror.style.color = "red"
    }

    else if (pass.value.length > 20) {
        passv = false
        passerror.innerHTML = "maximum limit 20 charecters"
        passerror.style.color = "red"
    }
    else {
        passv = true
        passerror.innerHTML = "Valid"
        passerror.style.color = "yellowgreen"
    }


    //db
    if (unamev == false || passv == false || mailv == false || genv == false) {
        return false
    }
    else {
        return true
    }
}


//reset button
function res() {
    nameerror.innerHTML = ""
    mailerror.innerHTML = ""
    passerror.innerHTML = ""
    generror.innerHTML = ""
}
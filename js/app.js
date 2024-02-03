let emailElem = document.querySelector("#Email");
let passwordElem = document.querySelector('#Password')


let btnLogin = document.querySelector(".form_btn_login")

let regexEmail = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/

btnLogin.addEventListener('click' ,(e)=>{
    e.preventDefault()
    if(emailElem.value === '' || passwordElem.value === ''){
        alert("Email and Password is NOT VALID ")
    }else if(!regexEmail.test(emailElem.value)){
        alert("Email is NOT VAlid")
    }
    else if(passwordElem.value.length < 8){
        alert("Password is NOT VALID")
    }
})



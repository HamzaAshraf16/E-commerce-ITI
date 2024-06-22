// varibles
let userName = document.querySelector('#userName')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let confirmPassword = document.querySelector('#ConfirmPassword')
let btnRegister = document.querySelector('#btnRegister')


btnRegister.addEventListener('click',function(e){
e.preventDefault();
// if data is empty
if(userName.value=='' || email.value=='' || password.value=='' || confirmPassword.value==''){
let ShowError = document.querySelector('#ShowErrorFillData')
ShowError.classList.replace('d-none','d-block')
ShowError.innerHTML = 'please fill data'
}

// if the conditions are done
else if(validateRegexName()==true && validateRegestPassword()==true && validateRegexEmail()==true){
// local storage muliple users 
let stored_users = JSON.parse(localStorage.getItem('users'));
if(stored_users){   
stored_users.push({"userName":userName.value, "password": password.value,"email":email.value});
localStorage.setItem('users',JSON.stringify(stored_users))
}
else{
localStorage.setItem('users', JSON.stringify([{"userName":userName.value, "password": password.value,"email":email.value}]));
}


setTimeout(() => {  
window.location = 'login.html'
},1500)
}

});

/////////////////////////////// userName /////////////////////////
function validateRegexName(){
let regex = /\b[A-Z][a-z]*\b/
if(regex.test(userName.value)==true){
return true
}
else{
return false
}
}

function validName() {
let isValid = validateRegexName();
let ShowErrorName = document.getElementById("ShowErrorName");
if (!isValid) {
ShowErrorName.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</symbol>
</svg>
<div class="alert alert-danger d-flex align-items-center mt-1 py-1" role="alert">
<svg class="bi flex-shrink-0 " width="20" height="20" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
<div class="mx-2">
please enter the first letter capital
</div>
</div>`;
userName.classList.add('is-invalid')
// console.log(userName);
} else {
  userName.classList.add('is-valid')
userName.classList.replace('is-invalid','is-valid')
ShowErrorName.innerHTML = `<b></b>`;
}
return isValid;
}
////////////////////////////  Email   /////////////////////////////

function validateRegexEmail(){
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^(010|011|012|015)\d{8}$/
if(regex.test(email.value)==true){
return true
}
else{ return false }
}

function validEmail(){
let isValid = validateRegexEmail()
let ShowErrorEmail = document.getElementById('ShowErrorEmail')
if(!isValid){
ShowErrorEmail.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</symbol>
</svg>
<div class="alert alert-danger d-flex align-items-center mt-1 py-1" role="alert">
<svg class="bi flex-shrink-0 " width="20" height="20" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
<div class="mx-2">
Invalid Email
</div>
</div>`
email.classList.add('is-invalid')

}
else{ 
email.classList.replace('is-invalid','is-valid')
ShowErrorEmail.innerHTML = ''
}
}
//////////////////////////////////////////////////////



// //////////////////// password ////////////////////////

function validateRegestPassword(){
var testPass = password.value === confirmPassword.value
let regex = /^(?=.*\d).{8,}$/
if((regex.test(password.value) && testPass)==true){
return true;
}
else {
return false;
}
}

function validPssword(){
let isValid = validateRegestPassword();
let ShowErrorPassword = document.getElementById('ShowErrorPassword')
if(isValid){

ShowErrorPassword.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
  </svg>
<div class="alert alert-success d-flex align-items-center p-1 mt-2" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>
      the same
    </div>
  </div>`;
password.classList.replace("is-invalid",'is-valid')
confirmPassword.classList.replace("is-invalid",'is-valid')
}
else if(!isValid){
password.classList.add('is-invalid')
confirmPassword.classList.add('is-invalid')
ShowErrorPassword.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</symbol>
</svg>
<div class="alert alert-danger d-flex align-items-center mt-1 py-1" role="alert">
<svg class="bi flex-shrink-0 " width="20" height="20" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
<div class="mx-2">
not the same password
and Password must be at least 8 characters long
</div>
</div>`

}
return isValid;
}



//////////////////////////////////////////////////// check box of Show Password
function ShowPasswordValue() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}






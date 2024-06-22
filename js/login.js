let userName = document.querySelector('#userName')
let password = document.querySelector('#password')
let loginBtn = document.querySelector('#loginBtn')

let stored_users = JSON.parse(localStorage.getItem('users'))


loginBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(userName.value=='' || password.value==''){
        let ShowErrorLogin =document.getElementById('ShowErrorLogin')
    ShowErrorLogin.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
        </svg>
        <div class="alert alert-danger d-flex align-items-center mt-1 py-1" role="alert">
        <svg class="bi flex-shrink-0 " width="20" height="20" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div class="mx-2">
        Please enter your data
        </div>
        </div>`
    }
    else if(stored_users){            // undifined
        for(let i=0;i<stored_users.length;i++){
            // 3shan user yd5l el userName Capital or Small
            let lowerUserName= (stored_users[i].userName).toLowerCase().trim()
           if(lowerUserName==(userName.value).toLowerCase().trim() && stored_users[i].password==password.value){
            localStorage.setItem('logedInUser', JSON.stringify(stored_users[i]))
                 window.location = 'index.html'
           }
        }
        ErrorLoginMessage();
    }
    else
    {
       ErrorLoginMessage();
    }

})
// Error message
function ErrorLoginMessage(){
    let ShowErrorLogin =document.getElementById('ShowErrorLogin')
    ShowErrorLogin.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
        </svg>
        <div class="alert alert-danger d-flex align-items-center mt-1 py-1" role="alert">
        <svg class="bi flex-shrink-0 " width="20" height="20" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div class="mx-2">
        the user name or your password is not correct, can you regestire if 
        you doesn't have account
        </div>
        </div>`
}




//////////////////////////////////////////////////// check box of Show message
function ShowPasswordValue() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
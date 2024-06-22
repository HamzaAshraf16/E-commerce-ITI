
let loginBtn = document.getElementById("loginBtn");
let loginForm = document.getElementById('loginForm');

let admins=[{
    name:"Hamza Ashraf",
    password:"hamza1234"
},{
     name:"Fares Ahmed",
    password:"fares1234"
},{
     name:"Abdelhafez Ayman",
    password:"abdelhafez1234"
}]



 
  
  loginBtnAdmin.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent form submission
      
      let adminName=document.getElementById("adminName").value;
      let password=document.getElementById("password").value;
      let loginSuccessful = false;
  
      // Check if the input matches any username and password in the admins array
      for (let admin of admins) {
          if (admin.name === adminName && admin.password === password) {
              loginSuccessful = true;
              break;
          }
      }
  
      // Display appropriate message
      if (loginSuccessful) {
         window.location="CRUD.html"
      } else {
         ErrorLoginMessage();
      }
  });




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
        the adminName or AdminPassword is not correct, please Enter valid Admin
        </div>
        </div>`
}

  




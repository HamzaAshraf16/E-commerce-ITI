let UserNow = JSON.parse(localStorage.getItem('logedInUser'))
let SignUpNone = document.getElementById('SignUpNone')
let grid =document.querySelector(".cart");
let buy =document.querySelector(".buy");
let pending =document.querySelector(".pending");
let price=document.getElementById("price");


let remove=document.getElementById("remove")
let CircleCart=document.querySelector('.CircleCart')


if(UserNow !== null){
  SignUpNone.innerHTML = `<h3>${UserNow.userName}</h3>
  <a class="nav-link text-muted active mx-3 RemoveUser" aria-current="page" href="login.html">logOut</a>`
}


var RemoveUser = document.querySelector(".RemoveUser")
/*
RemoveUser.addEventListener('click',function(){
  JSON.parse(localStorage.removeItem('logedInUser'))
})*/



let cart=[];

if(localStorage.getItem("cart")){
    cart=JSON.parse(localStorage.getItem("cart"));
    display(cart)
  }else{
    empty()
    cart=[];
  }

  
  
function display(plist){
    cart=JSON.parse(localStorage.getItem("cart"));
     var cartoon=``;
     
     for(var i=0;i<plist.length;i++){
      
     
      
        cartoon+=`
        
    <div class="row border-bottom py-2 mt-3">
         <div class="col-md-2">

        <img src="./images/product/${plist[i].image}" class="w-100" />

        </div>
        <div class="col-md-10 d-flex justify-content-between align-items-center">

        <div>
            <h2 class=" mb-2 text-color font-cat">${plist[i].title}</h2>
            <h4 class="text-main mb-2 mt-2 font-cat">Price :${plist[i].price}<span>$</span></h4>
              
        </div>

        <div>
            <button class="btn p-0 m-0 text-main border-0 mt-2 fs-4" id="remove" onclick="deleteProduct(${i})"><i class="fa-regular fa-trash-can"></i> Remove </button>

        </div>

    </div>
    </div>
   
    `
     }
     empty()
     grid.innerHTML=cartoon;
  }


  
  function empty(){
    if(!localStorage.getItem("cart")){
      cartoon=`
      <h1 class="text-color text-center ">Cart Empty</h1>
      `
      buy.innerHTML=cartoon
     }
}
 

function deleteProduct(index){
  cart.splice(index,1)
  localStorage.setItem('cart' , JSON.stringify(cart))
  display(cart)
  let totalprice=0
for(let i=0;i<cart.length;i++){
totalprice+=Number(cart[i].price)
}
price.innerHTML=`total : ${totalprice}$`
}



//Category
  function displayCataegory(){
    let categorey=["electronics","jewelery","men's clothing","women's clothing"]
    let cartoon=``;
    for(var i=0;i<categorey.length;i++){
       cartoon+=` 
            
              <li><a class="dropdown-item" href="${categorey[i]}.html">${categorey[i]}</a></li>
              
            `
    }
    dropdown.innerHTML=cartoon;
  }
  document.addEventListener('DOMContentLoaded',()=> {
    displayCataegory();
    numberCart(numcart.length)
  });
//

let numcart =JSON.parse(localStorage.getItem("cart"))
function numberCart(number){
  CircleCart.style.display="block";
 CircleCart.innerHTML=number
}



function saveToOreder(){
let orders=JSON.parse(localStorage.getItem("order")) || [];
let item=JSON.parse(localStorage.getItem("cart"));
orders.push(...item)
localStorage.setItem("orders", JSON.stringify(orders))
buy.classList.add('d-none')
pending.classList.replace('d-none','d-block')
localStorage.removeItem("cart")
}


//totalprice
let totalprice=0
for(let i=0;i<cart.length;i++){
totalprice+=Number(cart[i].price)
}
price.innerHTML=`total : ${totalprice}$`


  //Payment
  window.paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value:totalprice // Ensure the value is a string with two decimal places
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            saveToOreder();
        })
    }
}).render('#paypal-button-container');

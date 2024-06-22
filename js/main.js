let grid =document.querySelector(".product");
let dropdown=document.getElementById("dropdown")
let searchInput=document.getElementById("searchInput")
let addproduct=document.querySelectorAll('.addproduct')
let CircleCart=document.querySelector('.CircleCart')
let data =[];
let dataCataegory=[]
let productlist=[];
let wishList=JSON.parse(localStorage.getItem("wishList")) ||[];
let cart = JSON.parse(localStorage.getItem("cart")) || [];


if(localStorage.getItem("products")){
  productlist=JSON.parse(localStorage.getItem("products"));
  display(productlist)
}else{
  productlist=[];
}





// display categorey
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
    numberCart(cart.length);
  });

//







//Display product
 function display(plist){
  productlist=JSON.parse(localStorage.getItem("products"));
   var cartoon=``;
   for(var i=0;i<plist.length;i++){
      cartoon+=`<div class="col-md-6 col-sm-12 col-lg-3 col-xl-3  ">
      <div class="product p-2 border border-3 rounded rounded-3 ZoomPhoto">
           <div class="cursor-pointer hover-table">
              <img src="./images/product/${plist[i].image}" class="w-100 rounded rounded-3" height="250">
              <div>
              <h3 class="h6 cat-col font-cat mt-2"> ${plist[i].title.slice(0,10)} </h3>
              
              </div>
              
              <div class="d-flex justify-content-between">
                  <p class="font-cat fw-bold"> ${plist[i].price}<span>$</span></p>
                  <div>
    <i class="fa-regular fa-heart text-danger fs-3 heart" data-id="${plist[i].id}" onclick="toggleWishListLogin(this, ${plist[i].id})"></i>
</div>
              </div>
          </div>
          <a herf=""><button class="btn-main w-100 addproduct " onclick="addCartlogin(${plist[i].id})">Add Product</button></a>
      </div>
  </div>`
   }
   grid.innerHTML=cartoon;
 
   
   
}


function numberCart(number){
  CircleCart.style.display="block";
    
    CircleCart.innerHTML=number
}



function addCartlogin(id){
  
  if(UserNow !== null){
    addCart(id)
  }
  else{
    window.location="login.html"
  }
  
}
 
//add an item to the cart
let UserNow = JSON.parse(localStorage.getItem('logedInUser'))

function addCart(id) {
  let item = productlist.find(product => product.id === id);
  cart.push(item);
  numberCart(cart.length)
  savetoStorageCart();
  alert("Product added!")
}


function savetoStorageCart() {

  localStorage.setItem("cart", JSON.stringify(cart));

}


//

  





//add to WihsList
function addWishList(id){
  let item=productlist.find((productlist)=> productlist.id==id)
  if (item && !wishList.some((product) => product.id == id)) {
    wishList.push(item);
    savetoStorageWishList();
}
}

function savetoStorageWishList(){
  localStorage.setItem("wishList",JSON.stringify(wishList));
}

 function RemoveWishList(id){
        let item = productlist.find((product) => product.id == id);
        if (item) {
          let itemIndex = wishList.findIndex((product) => product.id == id);
          if (itemIndex > -1) {
            wishList.splice(itemIndex, 1);
            savetoStorageWishList();
          }
        }
      }
function toggleWishListLogin(element,id){
  if(UserNow !== null){
    toggleWishList(element, id)
  }
  else{
    window.location="login.html"
  }
  
}

function toggleWishList(element, id) {
  if (element.classList.contains('fa-regular')) {
      element.classList.remove('fa-regular');
      element.classList.add('fa-solid');
      addWishList(id);
  } else {
      element.classList.remove('fa-solid');
      element.classList.add('fa-regular');
      RemoveWishList(id);
  }
}  

// to save the data when reload the page
function loadWishListFromStorage() {
  const storedWishList = localStorage.getItem("wishList");
  if (storedWishList) {
      wishList = JSON.parse(storedWishList);
      updateWishListUI();
  }
}

function updateWishListUI() {
  wishList.forEach((item) => {
      let element = document.querySelector(`[data-id="${item.id}"]`);//
      if (element) {
          element.classList.remove('fa-regular');
          element.classList.add('fa-solid');
      }
  });
}
document.addEventListener('DOMContentLoaded', loadWishListFromStorage);














//Search Product
function searchProduct(){
  var term=searchInput.value;
  var searchlist=[];
  for(var i=0;i<productlist.length;i++){
     if(productlist[i].title.toLowerCase().includes(term.toLowerCase())){
        searchlist.push(productlist[i]);
     }
  }

  display(searchlist);

  
}
//




//Count Time
let end = new Date('09/22/2024 12:00 AM');

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let timer;

    function showRemaining() {
        let now = new Date();
        let distance = end - now;

        let days = Math.floor(distance / day);
        let hours = Math.floor((distance % day) / hour);
        let minutes = Math.floor((distance % hour) / minute);
        let seconds = Math.floor((distance % minute) / second);

        document.getElementById("clock").innerHTML=`${days} days ${hours} hrs ${minutes} mins ${seconds} secs`
    }

    timer = setInterval(showRemaining, 1000);





//  add bianat user and delete when he do logOut

    let SignUpNone = document.getElementById('SignUpNone')


    if(UserNow !== null){
      SignUpNone.innerHTML = `<h3>${UserNow.userName}</h3>
      <a class="nav-link text-muted active mx-3 RemoveUser" aria-current="page" href="login.html">logOut</a>`
    }
    

    var RemoveUser = document.querySelector(".RemoveUser")


    RemoveUser.addEventListener('click',function(){
      JSON.parse(localStorage.removeItem('logedInUser'))
    })
    //////////////////////////////////////////////////////
var grid =document.querySelector(".product");
let dropdown=document.getElementById("dropdown");
let CircleCart=document.querySelector('.CircleCart');
let wishList=JSON.parse(localStorage.getItem("wishList")) ||[];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let dataCataegory=[];





//Cateagory
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
display();
displayCataegory();
numberCart(Numcart.length)
});
        
  //number of cart 
function numberCart(number){
  CircleCart.style.display="block";
    
    CircleCart.innerHTML=number
}
let Numcart =JSON.parse(localStorage.getItem("cart"))
 //









//product
function display(){
    productlist=JSON.parse(localStorage.getItem("products"));
     var cartoon=``;
     for(var i=0;i<productlist.length;i++){
        if(productlist[i].category=="men's clothing"){
            cartoon+=`<div class="col-md-6 col-sm-12 col-lg-3 col-xl-3">
            <div class="product p-2 border border-3 rounded rounded-3 ZoomPhoto"">
                 <div class="cursor-pointer hover-table">
                    <img src="./images/product/${productlist[i].image}" class="w-100 rounded rounded-3" height="250">
                    <div>
                    <h3 class="h6 cat-col mt-2"> ${productlist[i].title.slice(0,10)} </h3>
                    
                    </div>
                    
                    <div class="d-flex justify-content-between">
                        <p> ${productlist[i].price} <span>EGP</span></p>
                         <div>
    <i class="fa-regular fa-heart text-danger fs-3 heart" data-id="${productlist[i].id}" onclick="toggleWishList(this, ${productlist[i].id})"></i>
</div>
              </div>
          </div>
          <a herf=""><button class="btn-main w-100 addproduct" onclick="addCart(${productlist[i].id})">Add Product</button></a>
      </div>
        </div>`
        }
       
     }
     grid.innerHTML=cartoon;
  }


  


 
//add an item to the cart
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



//wishlist (hfa)



//WihsList
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


//  switch funcitions
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
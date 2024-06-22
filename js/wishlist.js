 // user name and delete when logOut
 /*let UserNow = JSON.parse(localStorage.getItem('logedInUser'))
 let SignUpNone = document.getElementById('SignUpNone')


 if(UserNow !== null){
   SignUpNone.innerHTML = `<h3>${UserNow.userName}</h3>
   <a class="nav-link text-muted active mx-3 RemoveUser" aria-current="page" href="login.html">logOut</a>`
 }
 

 var RemoveUser = document.querySelector(".RemoveUser")

 RemoveUser.addEventListener('click',function(){
   JSON.parse(localStorage.removeItem('logedInUser'))
 })*/








 let grid =document.querySelector(".wishlist");
let remove=document.getElementById("remove");
let CircleCart=document.querySelector('.CircleCart')


   let wishList=[];

   if(localStorage.getItem("wishList")){
    wishList=JSON.parse(localStorage.getItem("wishList"));
       display(wishList)
     }else{
        wishList=[];
     }
   
     
   function display(plist){
    wishList=JSON.parse(localStorage.getItem("wishList"));
        var cartoon=``;
        
        for(var i=0;i<plist.length;i++){
         
         
    
   
           cartoon+=`
       <div class="col-md-6 col-sm-12 col-lg-3 col-xl-3  ">
      <div class="wishlist p-2 border border-3 rounded rounded-3 ZoomPhoto">
           <div class="cursor-pointer hover-table ">
              <img src="./images/product/${plist[i].image}" class="w-100 rounded rounded-3" height="250">
              <div>
              <h3 class="h6 cat-col font-cat mt-3"> ${plist[i].title.slice(0,10)} </h3>
              
              </div>
              
              <div class="d-flex justify-content-between align-items-center">
              <div>
              <p class="mb-0 font-cat"> ${plist[i].price} <span>$</span></p>
              </div>
                  
              <div>
               <button class="btn p-0 m-0 text-main border-0 text-danger remove" id="remove" onclick="deleteProduct(${i})"><i class="fa-regular fa-trash-can"></i></button>
              </div>
             </div>
               </div >
          <a herf=""><button class="btn-main w-100 addproduct mt-3" onclick="addCart(${plist[i].id})">Add Product</button></a>
      </div>
              </div>
        
  </div>
       `
        }
        
        
        grid.innerHTML=cartoon;
     }
   
   function deleteProduct(index){
    wishList.splice(index,1)
     localStorage.setItem('wishList' , JSON.stringify(wishList))
     display(wishList)
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
       numberCart(cart.length)
     });
   //
   
   //number of cart
   let cart =JSON.parse(localStorage.getItem("cart"))
   function numberCart(number){
     CircleCart.style.display="block";
       
       CircleCart.innerHTML=number
   }
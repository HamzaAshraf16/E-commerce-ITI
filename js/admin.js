
let productName = document.getElementById("productName");

let productPrice = document.getElementById("productPrice");

let productCategory = document.getElementById("productCategory");

let productDescription = document.getElementById("productDescription");

let productStock=document.getElementById("productStock");

let image = document.getElementById("image");

let mybtn=document.getElementById("mybtn");

let mybody =  document.getElementById("mybody");

let error=document.getElementById("error")

let productlist;

let updateIndex;


let imageValue;
image.addEventListener('change', function(event) {
   const file = event.target.files[0];
   imageValue=file.name

});






let idproduct=1;





if(localStorage.getItem("products")){

   productlist=JSON.parse(localStorage.getItem("products"));
   displayProduct(productlist);


}else{
   productlist=[];
}


function addProduct(){
   if(mybtn.innerHTML==="Add Product"){
     if (productNameValidation()===true) {
        var product={
         id:idproduct++,
         title: productName.value,
         price : productPrice.value,
         category: productCategory.value,
         Stock:productStock.value,
         image:imageValue,
         description: productDescription.value
       }
       productlist.push(product);
        
     }else{
        console.log("Erorrrrr");
     }

}else if(mybtn.innerHTML==="Update Product"){

   productlist[updateIndex].title =productName.value;
   productlist[updateIndex].price =productPrice.value;
   productlist[updateIndex].category =productCategory.value;
   productlist[updateIndex].Stock =productStock.value;
   productlist[updateIndex].image =imageValue;
   productlist[updateIndex].description =productDescription.value;
   mybtn.innerHTML="Add Product";


}
clearformInput();

savetoStorage();
displayProduct(productlist);
}


function clearformInput(){

   productName.value="";
   productPrice.value="";
   productCategory.value="";
   productDescription.value="";
   productStock.value="";
   image.value="";
   
}



function displayProduct(plist){
   var cartoon="";
   for(var i =0; i<plist.length;i++){
       cartoon +=`<tr>
   
       <td>${i+1}</td>
       <td>${plist[i].title}</td>
       <td>${plist[i].price}</td>
       <td>${plist[i].category}</td>
       <td>${plist[i].Stock}</td>
      <td>${plist[i].image}</td>
       
       <td><button onclick="updateElement(${i})" class="btn btn-outline-warning">Update</button></td>
       <td><button onclick="deleteElement(${i})" class="btn btn-outline-danger">Delete</button></td>

   </tr>`

   }
   mybody.innerHTML=cartoon
}

function deleteElement(index) { 
   productlist.splice(index,1);
   savetoStorage();
   displayProduct(productlist);
}

function savetoStorage(){
   localStorage.setItem("products",JSON.stringify(productlist));

}





function updateElement(index){
   updateIndex=index;
   productName.value=productlist[index].title;
   productPrice.value=productlist[index].price;
   productCategory.value=productlist[index].category;
   productStock.value=productlist[index].Stock
   imageValue=productlist[index].image;
   productDescription.value=productlist[index].description;

   mybtn.innerHTML="Update Product";

}


function searchProduct(){
  var term=searchInput.value;
  var searchlist=[];
  for(var i=0;i<productlist.length;i++){
     if(productlist[i].name.toLowerCase().includes(term.toLowerCase())){
        searchlist.push(productlist[i]);
     }
  }

  displayProduct(searchlist);

  
}


function productNameValidation(){
  var regex=/^[A-Z][a-z]{3,8}$/;
  if (regex.test(productName.value)===true) {
     error.classList.replace("d-block","d-none");

     productName.classList.add("is-valid");
     productName.classList.remove("is-invalid");
     return true;
  }else{
     error.classList.replace("d-none","d-block");
     productName.classList.add("is-invalid");
     productName.classList.remove("is-valid");

     return false;
  }
}





//all order



let grid =document.querySelector(".orders");

let orders=[];

if(localStorage.getItem("orders")){
    orders=JSON.parse(localStorage.getItem("orders"));
    display(orders)
  }else{
    empty()
    orders=[];
  }

  
function display(plist){
    orders=JSON.parse(localStorage.getItem("orders"));
     let cartoon=``
     for(var i=0;i<plist.length;i++){
        cartoon+=`
        
    <div class="row border-bottom py-2 mt-3 justify-content-between">
    
         <div class="col-md-2">

        <img src="./images/product/${plist[i].image}" class="w-100" />

        </div>
        <div class="col-md-10 d-flex justify-content-between align-items-center">

       
            <h2 class=" mb-2 text-color">${plist[i].title}</h2>
            <h4 class="text-main mb-2 mt-2">Price :${plist[i].price}<span>$</span></h4>
              
       

        

    </div>
    </div>
   
    `
     }
    
    
  
     empty()
     grid.innerHTML=cartoon;
   
  }
  function empty(){
    if(!localStorage.getItem("orders")){
      cartoon=`
      <h1 class="text-color text-center ">No orders</h1>
      `
      buy.innerHTML=cartoon
     }
}
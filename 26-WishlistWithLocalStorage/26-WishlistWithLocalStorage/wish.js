let myFav =JSON.parse(localStorage.getItem('Favourite'))?? []

// console.log(myBasket);

function drawBasket() {
    let products = document.querySelector(".products");
    products.innerHTML = ""; 

    myFav.forEach(element => {
        myTable(element);
    });
}

function myTable(element){
    let products=document.querySelector(".products")

    products.innerHTML+=` <div class="product">
    <div class="foto">
        <img class="sekil" src="${element.mehsul.image}"  alt="">
    </div>
    <div class="name">
    ${element.mehsul.title}
    </div>
    <div class="count">
       
        ${element.count}
       

    </div>
    <div class="price">${element.count*element.mehsul.price}</div>
</div>`

}

// function AddProduct(productId) {
//     const product = getProductById(productId);
//     console.log(product);
//     product.count+=1
//     localStorage.setItem("Favourite",JSON.stringify(myBasket))
//     drawBasket();
    

// }
// function DeleteProduct(productId) {
//     const product = getProductById(productId);
//     console.log(product);
//     product.count-=1
//     localStorage.setItem("Favourite",JSON.stringify(myFav))
//     drawBasket();
    

// }
function getProductById(productId) {
    return myFav.find(x => x.mehsul.id === productId);
    
}

drawBasket(); 



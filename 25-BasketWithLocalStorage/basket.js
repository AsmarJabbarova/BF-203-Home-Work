let myBasket =JSON.parse(localStorage.getItem('basket'))?? []

console.log(myBasket);

myBasket.forEach(element => {
    myTable(element)

    
});

function myTable(element){
    let products=document.querySelector(".products")
    let product=document.createElement("div")
    product.setAttribute("class","product")

    let foto=document.createElement("div")
    foto.setAttribute("class","foto")

    let img =document.createElement("img")
    let name = document.createElement("div")
    let h2=document.createElement("h2")


    let count=document.createElement("div")
    let price=document.createElement("div")

    product.append(foto,name,count,price)
    foto.appendChild(img)
    name.appendChild(h2)
    products.appendChild(product)


    img.src=element.mehsul.image
    name.innerHTML=element.mehsul.title
    count.innerHTML=element.count
    price.innerHTML=element.mehsul.price




}
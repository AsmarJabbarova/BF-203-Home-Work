
let productsData = [];
let myDetail =JSON.parse(localStorage.getItem('detail'))?? []

    fetch('http://localhost:3000/singers')
    .then(res => res.json())
    .then(data => {
        productsData = data;
        displayProducts(productsData);
        // console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    function displayProducts(products) {
        const cards=document.querySelector(".cardd")

        products.forEach(product => {
            const card = document.createElement('div');
            // card.classList.add('card');
            cards.innerHTML+=`
            <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">The ${product.name}</h5>
              <p class="card-text">The ${product.name} is ${product.nationality}</p>
              <a onclick="goDetail(${product.age}) href="./detail.html" class="btn btn-primary">Detail</a>
            </div>
          </div>    
            `
            cards.appendChild(card);
        });
     
   
    }



    function goDetail(productId) {

        const product = getProductById(productId);
        // if (myFav.some(x => x.mehsul.id == product.id)) {
        //     Swal.fire({
        //     position: 'top-end',
        //     icon: 'success',
        //     title: 'Already added favourite!',
        //     showConfirmButton: false,
        //     timer: 1500
        //   })
        // } 
        // else {
        //     let basketObj = {
        //         count: 1,
        //         mehsul: product
        //     };
        // }
        
            myDetail.push(product);
        localStorage.setItem("detail",JSON.stringify(myDetail))
    }
    function getProductById(productId) {
        return productsData.find(x => x.id === productId);
        
    }



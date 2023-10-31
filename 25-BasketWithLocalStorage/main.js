let productsData = [];
let myBasket=[]

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        productsData = data;
        displayCategories(productsData);
        displayProducts(productsData);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function displayCategories(products) {
    const categories = [...new Set(products.map(product => product.category))];
    const categoriesDiv = document.getElementById('categories');

    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-button');
        button.textContent = category;
        button.addEventListener('click', () => showCategory(category));
        categoriesDiv.appendChild(button);
    });
}

function displayProducts(products) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating.rate}</p>
            <p>Stock: ${product.rating.count}</p>
            <button onclick="addToFavorites(${product.id})">Favorite</button>
            <button onclick="addToBasket(${product.id})">Basket</button>
            <button onclick="showProductDetails(${product.id})">Info</button>
        `;
        productsDiv.appendChild(card);
    });
}

function addToFavorites(productId) {
    const product = getProductById(productId);
    const favoriteItems = document.getElementById('favorite-items');
    const favoriteItem = document.createElement('li');
    favoriteItem.innerHTML = `${product.title} - $${product.price}`;
    favoriteItems.appendChild(favoriteItem);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Add to favorite',
        showConfirmButton: false,
        timer: 1500
      })
}
function addToBasket(productId) {
    const product = getProductById(productId);

    if (myBasket.some(x => x.mehsul.id == product.id)) {
        // console.log(myBasket);
        myBasket.forEach(elem => {
            if (elem.mehsul.id == product.id) {
                elem.count += 1;
                return; 
            }
        });
    } else {
        let basketObj = {
            count: 1,
            mehsul: product
        };
        myBasket.push(basketObj);
    }

    console.log(myBasket);

    localStorage.setItem("basket",JSON.stringify(myBasket))
}



function emptyBasket() {
    const basketItems = document.getElementById('basket-items');
    basketItems.innerHTML = '';
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}


function emptyFavorite() {
    const favoriteItems = document.getElementById('favorite-items');
    favoriteItems.innerHTML = '';
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

// function showProductDetails(productId) {
//     const product = getProductById(productId);
//     alert(`Ad: ${product.title}\nQiymət: $${product.price}\nKateqoriya: ${product.category}\nReyting: ${product.rating.rate}\nStokda olan sayı: ${product.rating.count}`);
// }
function showProductDetails(productId) {
    const product = getProductById(productId);
    Swal.fire({
        icon: 'info',
        title: product.title,
        html: `Price: $${product.price}<br>
            Category: ${product.category}<br>
            Rating: ${product.rating.rate}<br>
            Stock: ${product.rating.count}`,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'OK'
    });
}

function getProductById(productId) {
    // console.log(productId);
    return productsData.find(product => product.id === productId);
}

function showCategory(category) {
    const productsByCategory = productsData.filter(product => product.category === category);
    displayProducts(productsByCategory);
}

function sortProducts() {
    const sortSelect = document.getElementById('sort-select');
    const sortBy = sortSelect.value;

    if (sortBy === 'price') {
        productsData.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'rating') {
        productsData.sort((a, b) => a.rating.rate - b.rating.rate);
    }

    displayProducts(productsData);
}





let inputSearch = document.querySelector('.inputSearch')
let mainDiv = document.querySelector(".mainDiv")
let card =  document.querySelectorAll('.card')


inputSearch.addEventListener("keyup", function(e){
    e.preventDefault()
   

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((users) => {
        users.forEach(user => {
            
    mainDiv.innerHTML += `<div class="user">
                   
    <img src="./assets/image/29638443d9670b8701bf01a5daef2f35.jpg" alt="">
    
    <div class="userInfo">
    <h4>${user.name}</h4>
    <h6>${user.address?.city}</h6>
    
    </div>
    </div> `;
    });

     })
})




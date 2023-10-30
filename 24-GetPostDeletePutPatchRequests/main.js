let card = document.querySelector(".card")
let row = document.querySelector(".row")


fetch(`https://northwind.vercel.app/api/suppliers`)
.then(res=> res.json())
.then((data) => {
 data.forEach((element,i) => {
   row.innerHTML +=`
   <div class="card" style="width: 18rem;">
       <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">${element.companyName}  </p>
         <p class="card-text"> ${element.companyName} </p>
         <p class="card-text"> ${element.address?.phone} </p>
         <p class="card-text"> ${element.address?.country} </p>
         <div class="buttons">
           <button type="button" name=${i} class="btn btn-info">Info</button>
                   
<button type="button" name=${element.id} class="btn btn-primary">Delete</button>
         </div>
       </div>
     
   
     </div>
   `
 });


 let infoBtns = document.querySelectorAll(".btn-info");
    for (let btn of infoBtns) {
      btn.addEventListener("click", function () {
       console.log(this);
        Swal.fire({
          title: `${data[btn.name].companyName}`,
          text: `${data[btn.name].address?.city}`,
          footer: `${data[btn.name].address?.country}`,
        });
      });
    }


 let deleteBtns = document.querySelectorAll(".btn-primary");
      for (let btn of deleteBtns ) {
        btn.addEventListener("click", function () {
        //   this.parentElement.parentElement.remove();

          this.parentElement.parentElement.parentElement.remove();
          //elementi apiden silmek
         
        });
      
        fetch("https://northwind.vercel.app/api/suppliers/"+ this.name, {
            method: "Delete",
          });
      }


      

})


let addbutton=document.querySelector(".btn-outline-secondary")
let input= document.querySelector(".form-control")
let clearall=document.querySelector(".btn-primary")

let toDos_div=document.querySelector(".checkbox-wrapper-11")


let count=0;

addbutton.addEventListener('click',function(){

    if(input.value.trim()!=''){
    let li = document.createElement('li');
var deleteButton=document.createElement("button")   
var list_div=document.createElement("div")
list_div.setAttribute("class","lists")
    li.innerText=input.value;
    deleteButton.setAttribute("class","btn btn-danger")
deleteButton.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>`

    list_div.append(li,deleteButton);
    toDos_div.append(list_div)
    count++;
    }
    else{
        alert("List element can not be empty !");
    }
    input.value='';


})

// deleteButton.addEventListener("click",function(e){

//     console.log(e.target);
// })


clearall.addEventListener('click',function(){
    if(count>0){
        toDos_div.innerHTML=""
        count=0;
    }
    else{
        alert("List is empty.")
    }
})
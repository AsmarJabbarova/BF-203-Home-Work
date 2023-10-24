let mainDiv=document.createElement("div")
mainDiv.setAttribute("class", "mainDiv");
mainDiv.style.display="flex"
mainDiv.style.justifyContent="center"
mainDiv.style.alignItems="center"
mainDiv.style.flexDirection="column"



let body=document.querySelector("body")
body.appendChild(mainDiv)
let div1=document.createElement("div")
div1.style.backgroundColor="black"
div1.style.width="960px"
div1.style.height="360px"
div1.style.marginBottom="20px"

let div2=document.createElement("div")

div2.setAttribute("class", "div2")
div2.style.width="960px"
div2.style.justifyContent="space-between"
div2.style.display="flex"
div2.style.gap="10%"

let div2_1=document.createElement("div")
let div2_2=document.createElement("div")
let div2_3=document.createElement("div")
div2_1.style.backgroundColor="black"
div2_2.style.backgroundColor="black"
div2_3.style.backgroundColor="black"
div2_1.style.width="290px"
div2_2.style.width="290px"
div2_3.style.width="290px"
div2_1.style.height="180px"
div2_2.style.height="180px"
div2_3.style.height="180px"


let div3=document.createElement("div")

let div3_1=document.createElement("div")
div3_1.style.width="290px"
div3.appendChild(div3_1)
let div3_1_1=document.createElement("div")
let div3_1_2=document.createElement("div")
let div3_1_3=document.createElement("div")
let title =document.createElement("p")
title.innerText = "Indonectetlus facilis";
let title2 = document.createElement("p")
title2.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id hic deserunt consectetur, reiciendis tenetur perferendis.";
let a =document.createElement("a")
a.innerText = "Read More"




div3_1_1.appendChild(title)
div3_1_2.appendChild(title2)
div3_1_3.appendChild(a)


div3_1.appendChild(div3_1_1)
div3_1.appendChild(div3_1_2)
div3_1.appendChild(div3_1_3)


let div3_2=document.createElement("div")
div3_2.style.width="290px"

div3.appendChild(div3_2)
let div3_2_1=document.createElement("div")
let div3_2_2=document.createElement("div")
let div3_2_3=document.createElement("div")


div3_2_1.appendChild(title)
div3_2_2.appendChild(title2)
div3_2_3.appendChild(a)

div3_2.appendChild(div3_2_1)
div3_2.appendChild(div3_2_2)
div3_2.appendChild(div3_2_3)



let div3_3=document.createElement("div")
div3.appendChild(div3_3)
let div3_3_1=document.createElement("div")
let div3_3_2=document.createElement("div")
let div3_3_3=document.createElement("div")

div3_3.appendChild(div3_3_1)
div3_3.appendChild(div3_3_2)
div3_3.appendChild(div3_3_3)





mainDiv.appendChild(div1)
mainDiv.appendChild(div2)
mainDiv.appendChild(div3)

div2.appendChild(div2_1)
div2.appendChild(div2_2)
div2.appendChild(div2_3)









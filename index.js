let price=document.getElementsByClassName("unit-price")
let btnIncra=document.getElementsByClassName("fa-plus-circle")
let btnDecr=document.getElementsByClassName("fa-minus-circle")
let btnRemove=document.getElementsByClassName("fa-trash-alt")
let heart=document.getElementsByClassName("fa-heart")
let quantity=document.getElementsByClassName("quantity")

let total=document.getElementsByClassName("total")
let card=document.getElementsByClassName('card')

let totalPRICE = 0;
for (let i = 0; i < card.length; i++) {
   
    btnIncra[i].addEventListener('click',add)
function add(){
quantity[i].textContent++;
console.log(i);
totalPRICE+=parseInt(price[i].textContent)

total[0].textContent=totalPRICE

}

btnDecr[i].addEventListener('click',Decr)
function Decr(){
if (quantity[i].textContent>0) {
    quantity[i].textContent--
    totalPRICE-=parseInt(price[i].textContent)

total[0].textContent=totalPRICE
}
else { 
    alert(" ")
}
}

btnRemove[i].addEventListener("click",remove)

function remove() {
    totalPRICE-=parseInt(price[i].textContent*quantity[i].textContent)
total[0].textContent=totalPRICE
    card[i].parentNode.removeChild(card[i])

}




heart[i].addEventListener("click",Like)

function Like() {
    
    if (   heart[i].style.color=="red") {
          heart[i].style.color="black"
          
    }
    else {heart[i].style.color="red" }
 
}
}

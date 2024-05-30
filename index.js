let val=document.querySelector("i");
let increament=document.querySelector(".btn3");
let reset=document.querySelector(".btn2");
let decrease=document.querySelector(".btn1");


increament.addEventListener("click",()=>{
val.innerText++;
});
decrease.addEventListener("click",()=>{
    val.innerText--;
})
reset.addEventListener("click",()=>{
    val.innerText=0;
})
console.log("connected");
const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")
 hamburger.addEventListener("click",()=>{
    console.log("click");
    navbar.classList.toggle("active");
 })
//console.log("hello saurav")



const mobile_nav=document.querySelector(".mobile-navbar-btn")
const nav_header=document.querySelector(".header");


mobile_nav.onclick=()=>{

    togglenavbar()
}


const togglenavbar=()=>{
    nav_header.classList.toggle("active")

}

const listitam=document.querySelectorAll(".navbar-link");

listitam.forEach((el)=>{

    el.onclick=()=>{
        nav_header.classList.remove("active")
    }
})










let navbar=document.querySelector(".header");

window.onscroll=()=>{
    mayfunction();
}

// var sticky = navbar.offsetTop;
var sticky = 70;

console.log(sticky)

const mayfunction=()=>{
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
        document.getElementById("homehero").style.marginTop="70 px"

    }else if(window.pageYOffset < sticky){
        navbar.classList.remove("sticky")
    }
}


//////////////  Show resume ////////////////


let resume=document.getElementById("resume");
resume.addEventListener("click",showresume);

function showresume(){
    window.location.href="https://drive.google.com/drive/folders/1NdjddpneGAKrKilHEGGTXK0qE49CzqFG?usp=sharing"
}
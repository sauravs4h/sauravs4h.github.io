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
        document.getElementById("homehero").style.marginTop="70 px";

    }else if(window.pageYOffset < sticky){
        navbar.classList.remove("sticky")
    }
}


//////////////  Show resume ////////////////


let resume=document.getElementById("resume");
resume.addEventListener("click",showresume);

function showresume(){
    window.open(URL, '_blank').location.href="https://drive.google.com/file/d/1xBDgi03qOPC1fxeHcpOCkA6Xlpcna3yv/view?usp=sharing"
}


let contectgithub= document.getElementById("contectgithub");

contectgithub.addEventListener("click",()=>{
    
    window.open(URL, '_blank').location.href="https://github.com/sauravs4h";
    target="_blank";
});

let contectlinkedin= document.getElementById("contectlinkedin");

contectlinkedin.addEventListener("click",()=>{

    window.open(URL, '_blank').location.href="https://www.linkedin.com/in/saurav-sharma-931262178/";
})




//////////////////

var modal = document.getElementById("myModal");


var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");

let img=document.querySelectorAll(".showimage");

img.forEach((el)=>{

    el.onclick=()=>{
        //console.log(el.src)
        modal.style.display = "block";
        modalImg.src = el.src;
        // captionText.innerHTML = this.alt;
    }
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
  }
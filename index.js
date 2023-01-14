//console.log("hello saurav")

let navbar=document.getElementById("navbar");

window.onscroll=()=>{
    mayfunction();
}

var sticky = navbar.offsetTop;


const mayfunction=()=>{
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")

    }else{
        navbar.classList.remove("sticky")
    }
}



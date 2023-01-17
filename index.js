//console.log("hello saurav")

let navbar=document.getElementById("navbar");

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



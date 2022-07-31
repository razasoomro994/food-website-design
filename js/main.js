// header scroll
let nav = document.querySelector(".navbar");
window.onscroll =function () {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled ")
    }
    else{
        nav.classList.remove("header-scrolled ")
    }
    
}
//let hide

let navBar =document.querySelector('.nav-link')
let navCollapse=document.querySelectorAll('.navbar-collapse.collapse')

navBar .forEach(function(e)  {
    e.addEventListener('click',function(){
        navCollapse.classList.remove('show')
    })
});





// back to top button // 


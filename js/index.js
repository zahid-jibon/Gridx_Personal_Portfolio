var hamburg = document.querySelector(".cro-hamburg");
var navbar_ul = document.querySelector(".cro-navbar-nav-ul");
var addMargin = document.querySelector(".cro-navbar");

hamburg.addEventListener("click", () => {{
    hamburg.classList.toggle("active");
    navbar_ul.classList.toggle("active");
    addMargin.classList.toggle("addMargin");
}})

document.querySelectorAll(".cro-navbar-nav-li").forEach(n =>n.addEventListener("click", ()=>{
    hamburg.classList.remove(".active")
    navbar_ul.classList.remove(".active")
    addMargin.classList.toggle("addMargin");
}))



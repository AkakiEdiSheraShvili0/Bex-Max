function shopNow() {
    let shop = document.querySelector(".order-sho");
    shop.classList.toggle("order-shop");
}
// function shopNow() {
//     document.getElementsByClassName('order').style.display = 'none';
// } 

function askNow() {
    let ask = document.querySelector(".ask-no");
    ask.classList.toggle("ask-now");
}
function shopAlert() {
    alert("შეკვეთა მიღებულია")
}
function askAlert() {
    alert("შეკითხვა მიღებულია")
    
}
function burgerMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("burgera");
}
function cotacta() {
    let contact = document.querySelector(".contact_number");
    contact.classList.toggle("contact-show");
}
function respoSearch() {
    let search = document.querySelector(".search");
    search.classList.toggle("responsive-search-active");
}
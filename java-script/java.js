var sayi = document.querySelector(".box .deger p");
var deger = 0;
var btn = document.querySelector(".box .button .artı");
var btn1 = document.querySelector(".box .button .eksi");

btn.addEventListener("click", function(e){
    deger++;
    sayi.textContent = deger;
    e.preventDefault();
})

btn1.addEventListener("click", function(e){

    deger--;
    sayi.textContent = deger;
    e.preventDefault();
})
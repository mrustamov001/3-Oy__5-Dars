let money = prompt ("Sayohat uchun 8 317 488,6so'm miqdorida pulingiz bo'lishi talab etiladi! \nSizning qancha pulingiz bor");

let param1 = document.querySelector(".hero__text");

if(money >= 8317488){
    param1.innerHTML = "Oq yo'l, Alisher!"
}
else{
    param1.innerHTML = "Alisher, ozgina sabr qilish kerak bo'lar ekan."
}

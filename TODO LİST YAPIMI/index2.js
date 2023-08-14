var add_item = document.querySelector("input");
var button_add_item = document.querySelector("span");
//input elementine ulaşmak için queryselector ile değşkene atama yapılır
//input içine enter tuşu basıldığında fonksiyon çağırıldı
for (let i = 0; i < document.querySelectorAll(".lis").length; i++) {
  document.querySelectorAll(".lis")[i].addEventListener("click", () => {
    document.querySelectorAll(".lis")[i].style.backgroundColor = "red";
  });
}

function mesaj() {
  var message1 = "İletişim Bilgileri:";
  var message2 = "eposta Bilgileri: elifozkanofis@gmail.com";
  alert(message1 + " " + message2);
}
/**function tarihGetir() {
  var tarih = new Date();
  var yıl = tarih.getFullYear();
  var ay = tarih.getMonth();
  var gün = tarih.getDay();
  var saat = tarih.getHours();
  var dakika = tarih.getMinutes();
  var saniye = tarih.getSeconds();
  document.write(
    gün + "/" + ay + "/" + yıl + " " + saat + ":" + dakika + ":" + saniye 
  );
}
/**var tarihGetir = document.getElementById("tarihSaat");
var sonuç = tarihGetir();
document.write(tarihGetir);*/
document.querySelector("#projedetay").onclick = function () {
  /** butona verdiği id ye göre click fonksiyonu ataması yapıldı*/
  window.location.href =
    "https://github.com/elif-ozkan/Kodluyoruz-Baslangic-Front-End/tree/main/Google98";
};
document.querySelector("#projedetay2").onclick = function () {
  /**id değerini queryselector ile alıp click fonksiyonuna atama yapıldı */
  window.location.href = "https://github.com/elif-ozkan/Angular-Learning";
};

/*var görev = document.querySelector("#myList");
var btn = document.querySelector("#CreateBtn");
var giriş = document.querySelector("#exampleFormControlInput1");
var btnSil = document.querySelector("#Silbtn");

btn.addEventListener("click", function () {
  var yenigörev = giriş.value.trim();
  if (yenigörev != "") {
    var yenigörevelemanı = document.createElement("li");
    yenigörevelemanı.textContent = yenigörev;
    görev.appendChild(yenigörevelemanı);
    giriş.value = "";
  } else {
    alert("Lütfen görev giriniz");
  }
});
/*for (i = 0; i < document.querySelectorAll("li").length; i++) {
  var row = document.querySelectorAll("li")[i];
  row.addEventListener("click", function () {
    row.style.backgroundColor = "transparent";
  });
}
btnSil.addEventListener("click", function () {});
//Görev silme
function sil(index) {
  const sil = confirm("Görevi silmek istediğinizden emin misiniz?");
  if (sil == true) {
  }
*/

document.querySelector("#ekle").onclick = function () {
  if (document.querySelector("#yenigörev input").value.length == 0) {
    alert("Lütfen görev girin");
  } else {
    document.querySelector("#görevler").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector("#yenigörev input").value}
              </span>
              <button class="delete" >    
                  <i class="fa fa-trash-alt"></i> 
                   
              </button> 
              
              
          </div>
      `;
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
        addicon = false;
      };
    }
  }
};
/*document.querySelector("#yenigörev input").onclick = function () {
  document.querySelector("#görevler").innerHTML += `
              <div class="task">
              <span id="taskname">
                   ${document.querySelector("#yenigörev input").value}
              </span>
              <button class="delete" >    
               
              <i class="fas fa-check" id="check"></i>  
                </button>
               

  `;
};*/

let addicon = true;
document.querySelector("#görevler").onclick = function () {
  if (addicon != false) {
    document.querySelector("#görevler").innerHTML += `
  <span class="icon-container"> 
    <i class="fas fa-check"></i> 
  </span>
 
  `;
  }
};

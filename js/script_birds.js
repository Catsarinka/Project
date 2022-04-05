// МОДАЛЬНОЕ ОКНО
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");


//ФУНКЦИИ

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// КНОПКА
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

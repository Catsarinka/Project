// Получить модель
var modal = document.getElementById("myModal");

// Получите изображение и вставьте его внутрь модального 
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
// var img3 = document.getElementById("myImg3");
// var img4 = document.getElementById("myImg4");
// var img5 = document.getElementById("myImg5");
// var img6 = document.getElementById("myImg6");
// var img7 = document.getElementById("myImg7");
// var img8 = document.getElementById("myImg8");

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

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}
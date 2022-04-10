// МОДАЛЬНЫЕ ОКНА

// Модель
var modal = document.getElementById("myModal");

// Изображение внутри МО 
var I = document.getElementById("I");
var modalImg = document.getElementById("picture");

var II = document.getElementById("II");
var III = document.getElementById("III");


//ФУНКЦИИ МО

I.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}

II.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}

III.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}




// КНОПКА

//  Элемент <span>
var span = document.getElementsByClassName("close")[0];

// Нажатие
span.onclick = function () {
  modal.style.display = "none";
}

// ЗАГОЛОВКИ (Динамический элемент)

const title = document.getElementById('title')


setTimeout(() => {
  addStylesTo(title)
}, 1000)

function addStylesTo(node) {
  node.style.color = '#60330b'
  node.style.textDecoration = 'underline'
  node.style.background = '#e2d3c5'
}
// Функция смены цвета каркаса авто
const car__frame = document.querySelector('#car__frame');
let range = document.querySelector('#range');
let distance = document.querySelector('.distance');
let glass = document.getElementById('glass');
let glass_bt = document.getElementById('glass_bt');
let glass_bt2 = document.getElementById('glass_bt2');
let glass_bt3 = document.getElementById('glass_bt3');
let glass_bt4 = document.getElementById('glass_bt4');

let avto_color = document.getElementById('avto_color');
let avto_color2 = document.getElementById('avto_color2');
let avto_color3 = document.getElementById('avto_color3');
let avto_color4 = document.getElementById('avto_color4');
let avto_color5 = document.getElementById('avto_color5');

function CarColor() {
  car__frame.style.color = 'rgb(189 193 40)';
}
function CarColor2() {
  car__frame.style.color = '#c94831';
}
function CarColor3() {
  car__frame.style.color = 'rgb(28 172 182)';
}
function CarColor4() {
  car__frame.style.color = '#317428';
}
function CarColor5() {
  car__frame.style.color = '#000000';
}

avto_color.addEventListener('click', CarColor);
avto_color2.addEventListener('click', CarColor2);
avto_color3.addEventListener('click', CarColor3);
avto_color4.addEventListener('click', CarColor4);
avto_color5.addEventListener('click', CarColor5);

// ЗАМЕНА ДИСКОВ У МАШИНЫ-----------
let radius1 = document.querySelector('#radius1');
let radius2 = document.querySelector('#radius2');
let avto_wheel1 = document.querySelector('#avto_wheel1');
let avto_wheel2 = document.querySelector('#avto_wheel2');
let avto_wheel3 = document.querySelector('#avto_wheel3');
let avto_wheel4 = document.querySelector('#avto_wheel4');
let avto_wheel5 = document.querySelector('#avto_wheel5');

function ColorWheel() {
  radius1.style.backgroundColor = 'rgb(189 193 40)';
  radius2.style.backgroundColor = 'rgb(189 193 40)';
}
function ColorWheel2() {
  radius1.style.backgroundColor = '#c94831';
  radius2.style.backgroundColor = '#c94831';
}
function ColorWheel3() {
  radius1.style.backgroundColor = '#31bfc9';
  radius2.style.backgroundColor = '#31bfc9';
}
function ColorWheel4() {
  radius1.style.backgroundColor = '#317428';
  radius2.style.backgroundColor = '#317428';
}
function ColorWheel5() {
  radius1.style.backgroundColor = 'rgb(185, 184, 176)';
  radius2.style.backgroundColor = 'rgb(185, 184, 176)';
}

avto_wheel1.addEventListener('click', ColorWheel);
avto_wheel2.addEventListener('click', ColorWheel2);
avto_wheel3.addEventListener('click', ColorWheel3);
avto_wheel4.addEventListener('click', ColorWheel4);
avto_wheel5.addEventListener('click', ColorWheel5);

// ЗАТЕМНЕНИЕ СТЕКЛА В МАШИНЕ----------

//range ползунок---------------------
range.onchange = function () {
  document.querySelector('.distance').innerHTML = range.value;
};

function col() {
  glass.style.opacity = range.value;
}

range.addEventListener('click', col);
//Цвета для стекла
function GlassColor() {
  glass.style.backgroundColor = 'rgb(189 193 40)';
}
function GlassColor2() {
  glass.style.backgroundColor = '#c94831';
}
function GlassColor3() {
  glass.style.backgroundColor = '#31bfc9';
}
function GlassColor4() {
  glass.style.backgroundColor = '#317428';
}
glass_bt.addEventListener('click', GlassColor);
glass_bt2.addEventListener('click', GlassColor2);
glass_bt3.addEventListener('click', GlassColor3);
glass_bt4.addEventListener('click', GlassColor4);

//  ФЭРОГРАФИЯ-----------------------

let graf_bt = document.getElementById('graf_bt');
let graf_bt2 = document.getElementById('graf_bt2');
let graf_bt3 = document.getElementById('graf_bt3');
let graf_bt4 = document.getElementById('graf_bt4');
let graf_bt5 = document.getElementById('graf_bt5');

function graffiti() {
  graf.style.backgroundImage = 'url(../images/airbrushing/pulia.png)';
}
function graffiti2() {
  graf.style.backgroundImage = 'url(../images/airbrushing/head.png)';
}
function graffiti3() {
  graf.style.backgroundImage = 'url(../images/airbrushing/gora.png)';
}
function graffiti4() {
  graf.style.backgroundImage = 'url(../images/airbrushing/play.png)';
}
function graffiti5() {
  graf.style.backgroundImage = 'none';
}

graf_bt.addEventListener('click', graffiti);
graf_bt2.addEventListener('click', graffiti2);
graf_bt3.addEventListener('click', graffiti3);
graf_bt4.addEventListener('click', graffiti4);
graf_bt5.addEventListener('click', graffiti5);

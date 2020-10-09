// Функция смены цвета каркаса авто
const car__frame = document.querySelector('#car__frame');
const range = document.querySelector('#range');
const distance = document.querySelector('.distance');
const glass = document.getElementById('glass');
const glass_bt = document.getElementById('glass_bt');
const glass_bt2 = document.getElementById('glass_bt2');
const glass_bt3 = document.getElementById('glass_bt3');
const glass_bt4 = document.getElementById('glass_bt4');
const glass_bt5 = document.getElementById('glass_bt5');
const avto_color = document.getElementById('avto_color');
const avto_color2 = document.getElementById('avto_color2');
const avto_color3 = document.getElementById('avto_color3');
const avto_color4 = document.getElementById('avto_color4');
const avto_color5 = document.getElementById('avto_color5');
const radius1 = document.querySelector('#radius1');
const radius2 = document.querySelector('#radius2');
const avto_wheel1 = document.querySelector('#avto_wheel1');
const avto_wheel2 = document.querySelector('#avto_wheel2');
const avto_wheel3 = document.querySelector('#avto_wheel3');
const avto_wheel4 = document.querySelector('#avto_wheel4');
const avto_wheel5 = document.querySelector('#avto_wheel5');
const graf_bt = document.getElementById('graf_bt');
const graf_bt2 = document.getElementById('graf_bt2');
const graf_bt3 = document.getElementById('graf_bt3');
const graf_bt4 = document.getElementById('graf_bt4');
const graf_bt5 = document.getElementById('graf_bt5');
const go = document.getElementById('go');
const car__box = document.querySelector('.car__box');
const wheel_left = document.querySelector('.wheel-left');
const wheel_right = document.querySelector('.wheel-right');

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
function GlassColor5() {
  glass.style.backgroundColor = 'black';
}

glass_bt.addEventListener('click', GlassColor);
glass_bt2.addEventListener('click', GlassColor2);
glass_bt3.addEventListener('click', GlassColor3);
glass_bt4.addEventListener('click', GlassColor4);
glass_bt5.addEventListener('click', GlassColor5);

//  ФЭРОГРАФИЯ-----------------------
function graffiti() {
  graf.style.backgroundImage = 'url(./images/airbrushing/pulia.png)';
}
function graffiti2() {
  graf.style.backgroundImage = 'url(./images/airbrushing/head.png)';
}
function graffiti3() {
  graf.style.backgroundImage = 'url(./images/airbrushing/gora.png)';
}
function graffiti4() {
  graf.style.backgroundImage = 'url(./images/airbrushing/play.png)';
}
function graffiti5() {
  graf.style.backgroundImage = 'none';
}

graf_bt.addEventListener('click', graffiti);
graf_bt2.addEventListener('click', graffiti2);
graf_bt3.addEventListener('click', graffiti3);
graf_bt4.addEventListener('click', graffiti4);
graf_bt5.addEventListener('click', graffiti5);

// МАШИНА ЕДЕТ

function goCar() {
  car__box.style.right = '-1550px';
  wheel_right.style.transform = 'rotate(600deg)';
  wheel_left.style.transform = 'rotate(600deg)';
}

go.addEventListener('click', goCar);

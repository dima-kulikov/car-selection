"use strict";

// Функция смены цвета каркаса авто
var car__frame = document.querySelector('#car__frame');
var range = document.querySelector('#range');
var range2 = document.querySelector('#range2');
var distance = document.querySelector('.distance');
var distance2 = document.querySelector('.distance2');
var glass = document.getElementById('glass');
var glass_bt = document.getElementById('glass_bt');
var glass_bt2 = document.getElementById('glass_bt2');
var glass_bt3 = document.getElementById('glass_bt3');
var glass_bt4 = document.getElementById('glass_bt4');

function CarColor() {
  car__frame.style.color = '#bdc023';
}

function CarColor2() {
  car__frame.style.color = '#c94831';
}

function CarColor3() {
  car__frame.style.color = '#31bfc9';
}

function CarColor4() {
  car__frame.style.color = '#317428';
}

avto_color.addEventListener('click', CarColor);
avto_color2.addEventListener('click', CarColor2);
avto_color3.addEventListener('click', CarColor3);
avto_color4.addEventListener('click', CarColor4); // ЗАМЕНА ДИСКОВ У МАШИНЫ-----------

var radius1 = document.querySelector('#radius1');
var radius2 = document.querySelector('#radius2');

function ColorWheel() {
  radius1.style.backgroundColor = '#bdc023';
  radius2.style.backgroundColor = '#bdc023';
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

avto_wheel1.addEventListener('click', ColorWheel);
avto_wheel2.addEventListener('click', ColorWheel2);
avto_wheel3.addEventListener('click', ColorWheel3);
avto_wheel4.addEventListener('click', ColorWheel4); // ЗАТЕМНЕНИЕ СТЕКЛА В МАШИНЕ----------
//range ползунок---------------------

range.onchange = function () {
  document.querySelector('.distance').innerHTML = range.value;
};

range2.onchange = function () {
  document.querySelector('.distance2').innerHTML = range2.value;
};

function col() {
  glass.style.opacity = range.value;
}

function col2() {
  car__frame.style.opacity = range2.value;
}

range.addEventListener('click', col);
range2.addEventListener('click', col2); //Цвета для стекла

function GlassColor() {
  glass.style.backgroundColor = '#bdc023';
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
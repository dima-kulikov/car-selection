// Функция смены цвета каркаса авто
// const car__frame = document.querySelector('car__frame');

function CarColor() {
  car__frame.style.color = '#e6ff02';
}
function CarColor2() {
  car__frame.style.color = '#ff0800';
}
function CarColor3() {
  car__frame.style.color = '#001aff';
}
function CarColor4() {
  car__frame.style.color = '#2dbd4c';
}

avto_color.addEventListener('click', CarColor);
avto_color2.addEventListener('click', CarColor2);
avto_color3.addEventListener('click', CarColor3);
avto_color4.addEventListener('click', CarColor4);

// ЗАМЕНА ДИСКОВ У МАШИНЫ
const radius = document.querySelector('#radius', '#radius1');

function ColorWheel() {
  radius.style.backgroundColor = '#e6ff02';
}

console.log(radius);

avto_wheel1.addEventListener('click', ColorWheel);

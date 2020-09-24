// Функция смены цвета каркаса авто
const car__frame = document.querySelector('#car__frame');

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
avto_color4.addEventListener('click', CarColor4);

// ЗАМЕНА ДИСКОВ У МАШИНЫ
let radius1 = document.querySelector('#radius1');
let radius2 = document.querySelector('#radius2');

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
avto_wheel4.addEventListener('click', ColorWheel4);


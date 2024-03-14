

// Считываем ползунок и оба квадрата
const slider = document.querySelector('.range');
const firstSquare = document.querySelector('.one');
const secondSquare = document.querySelector('.two');
const backGround = document.querySelector('#main-square');


function setColor() {
 
    let valueSlider = slider.value;

    //меняем фон
    backGround.style.backgroundColor = `rgb(${255-slider.value},${255-slider.value},${255-slider.value})`;
    //меняем positopn left верхнего квадрата - ползет слева направо
    firstSquare.style.left = `${valueSlider}px`;
    //меняем positopn left нижнего квадрата - ползет справа налево
    secondSquare.style.left = `${267 - valueSlider}px`;


    //меняем 
}

//обработчик собыя
slider.addEventListener('input', setColor);


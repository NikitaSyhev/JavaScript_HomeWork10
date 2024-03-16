

// // Считываем ползунок и оба квадрата
// const slider = document.querySelector('.range');
// const firstSquare = document.querySelector('.one');
// const secondSquare = document.querySelector('.two');
// const backGround = document.querySelector('#main-square');


// function setColor() {
//     //считали значение слайдера
//     let valueSlider = slider.value;

//     //меняем фон
//     backGround.style.backgroundColor = `rgb(${255-valueSlider},${255-valueSlider},${255-valueSlider})`;
//     //меняем positopn left верхнего квадрата - ползет слева направо
//     firstSquare.style.left = `${valueSlider}px`;
//     //меняем positopn left нижнего квадрата - ползет справа налево
//     secondSquare.style.left = `${267 - valueSlider}px`;


//     //меняем 
// }

// //обработчик собыя
// slider.addEventListener('input', setColor);

function solution(str, ending){
    // TODO: complete
    if(ending.length > str.length) return false;
  
    let stringEnd = str.substring(str.length - ending.length, str.length);
    
    if(stringEnd == ending ) return true;
  else return false;
    }

 console.log(solution('abd', 'dd'));



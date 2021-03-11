'use strict';


let buttonEmbarrased = document.getElementById('goOWO');
let buttonSimp = document.getElementById('goSIMP');

let image = document.getElementById('img');
let counter = 0;
let imgEmbarras = 'https://tse3.mm.bing.net/th?id=OIP.sAyyEGBRI4eUC-HiJfYecgAAAA&pid=Api';
let imgSimp = 'https://i.pinimg.com/originals/f1/4a/df/f14adf086c2bc669c0d2c2fc43608646.png';

function changeToOwO(){
    image.src=imgEmbarras;
    console.log('is? for me?')
}

function changeToUwU(){
    image.src=imgSimp;
    console.log('HA simp!')
}

function counting(){
    counter++;
    document.getElementById('count').textContent = (counter);
}
console.log(counter)

buttonEmbarrased.addEventListener('click', changeToUwU)
buttonSimp.addEventListener('click', changeToOwO);
buttonSimp.addEventListener('click', counting);
buttonEmbarrased.addEventListener('click', counting);


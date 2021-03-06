`use strict`;

//should make the percent go up
//number is the percent in the string
//final value is the number you get at the end
function increase(number, finalValue){
    //parseInt takes a string and grabs the integer
    let currentVal = parseInt(document.getElementById(number).innerHTML, 10);
    if(currentVal < finalValue){
        currentVal++;
        setTimeout(function(){increase(number,finalValue);}, 40);
    }
}

//when you scroll down to the number, it will increase
$("#1").(function(){
    increase(1, 80)
})

//jquery here is heavily based off of Jacob Banner's work (https://codepen.io/jacobbanner/pen/dGZePo)
"use strict"



/*===============function RGBA-generat====================*/

let start = function () {


 let color = [];
let answer;
let red;
let green;
let blue;
let alfa;

function rgbRed () {
  let r = Math.floor(Math.random() * 1000);
  if (r > 255) {
     red = Math.floor (r / 4);
  } else {
     red = r;
  }
  color[0] = red;
}
rgbRed();

function rgbGreen () {
  let r = Math.floor(Math.random() * 1000);
  if (r > 255) {
     green = Math.floor (r / 4);
  } else {
     green = r;
  }
  color[1] = green;
}
rgbGreen();

function rgbBlue () {
  let r = Math.floor(Math.random() * 1000);
  if (r > 255) {
     blue = Math.floor (r / 4);
  } else {
     blue = r;
  }
  color[2] = blue;
}
rgbBlue();

function rgbA () {
   alfa = Math.random();
   console.log(alfa);
   if (alfa.toFixed(1) == 0) {
      color[3] = 1;      
   }
   else{
      color[3] = alfa.toFixed(1);
   }   
 }
 rgbA();

answer = "rgb"+"("+ color.toString() +")";
box.style.backgroundColor = answer;
console.log(answer);
};/*end function 'start'*/ 

let go = document.querySelector('button');
let box = document.querySelector(".box");

go.onclick = () => {   
  start();
};


/*==========================================*/





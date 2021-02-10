'use strict';


let urName = prompt ('what\'s your  name??');

alert('Hello' + ' ' + urName + ' '+ 'ready for guessing game !! ' );
alert('Answer with yes[y] or no[n] please');



let answers =0;

function guessName(){
  let myName = prompt ('what\'s my name ?? is it bayan??');
  if (myName .toLowerCase() ==='yes' || myName .toLowerCase() === 'y' ) {
  //console.log ('correct');
    alert ('correct');

    answers = answers + 1;

  } else {
    alert('false');
  }
}
guessName();
function guessColor(){
  let myColor = prompt ('what\'s my favorite color ?? is it yellow??');
  if (myColor .toLowerCase() ==='yes' || myColor .toLowerCase() === 'y' ) {
  //console.log ('correct');
    alert ('correct');
    answers = answers + 1;

  } else {
    alert ('false');
  }
}
guessColor();
function guessAge(){
  let age = prompt ('what\'s my age ?? is it 25 ??');
  if (age .toLowerCase() === 'yes' || age .toLowerCase() ==='y'){
  //console.log ('correct');
    alert ('correct');
    answers = answers + 1;
  }else {
    alert ('false');
  }
}
guessAge();

function guessFood(){
  let food = prompt ('what\'s my favorite food ?? is it Mansaf ??');
  if (food .toLowerCase()=== 'yes' || food .toLowerCase() === 'y'){
  //console.log ('correct');
    alert ('correct');
    answers = answers + 1;
  }else{
    alert ('false');
  }
}
guessFood();
function guessHobby(){
  let hobby = prompt ('what\'s my favorite hobby ?? is it reading??');
  if(hobby .toLowerCase() === 'yes' || hobby .toLowerCase() === 'y'){
  //console.log ('correct');
    alert ('correct');
    answers = answers + 1;
  }else {
    alert ('false');
  }
}
guessHobby();

let attempts=4;
function guessBooks(){
  let userGuess=prompt('try to guess how many books do I read in year??');

  while(attempts) {
    for(let i=0;i<4;i++){
      if (userGuess==='15'){
      //console.log('You are correct');
        answers = answers + 1;
        alert('You are correct !');
        correct=true;
        continue;
      }

      attempts -=1;
      userGuess =prompt('please try again you have : '+attempts+' remaining!');
    }
    if (!attempts){
      alert(' the correct answer is  15  ' );
    }
  }
}
guessBooks();

let colorlist =['green','red','purple','pink'];
let chances=6;
let colorInput= prompt ('What\'s the pin colors are in my pencil case?');
function guessPin(){
  while (chances) {
    for (let i=0;i<6;i++){
      if (colorInput === colorlist[0] || colorInput === colorlist[1] || colorInput === colorlist[2] || colorInput === colorlist[3]  ){
        alert('correct answer!');
        //console.log("correct");
        answers = answers + 1;
        correct=true;
        break;
      }
      chances-=1;
      colorInput=prompt('please try again you have : '+chances+' remaining!');
    }
    if (!chances) {
      alert('The correct answers is one of These : ' + ' black, pink,orange, yellow');
      alert ('Finally your correct answers in the game  ==>> ' + answers );
      break;
    }
  }
}
guessPin();

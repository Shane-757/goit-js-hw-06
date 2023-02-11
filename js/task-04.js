

const countUp = document.querySelector('button[data-action = "increment"]');
const countDown = document.querySelector('button[data-action = "decrement"]');
const textHolder = document.querySelector("#value");
let counterValue = 0;
textHolder.innerHTML = counterValue;

countUp.addEventListener("click", incrementCounterUp);
 

countDown.addEventListener("click", incrementCounterDown);
  

function incrementCounterUp() {
  textHolder.innerHTML = ++counterValue;
}

function incrementCounterDown() {
  textHolder.innerHTML = --counterValue;
}
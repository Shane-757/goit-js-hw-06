const button = document.querySelector('button');
const body = document.querySelector('body');
const hexValue = document.querySelector('span');

button.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  hexValue.textContent = body.style.backgroundColor;
})

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
  

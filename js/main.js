// Write your DOM code here!
const redBtn = document.querySelector('.red');
const whiteBtn = document.querySelector('.white');
const blueBtn = document.querySelector('.blue')
const yelBtn = document.querySelector('.yellow');
const purpBtn = document.querySelector('.purple');
const redGradBtn = document.querySelector('.red-grad');
const whiteGradBtn = document.querySelector('.white-grad');
const blueGradBtn = document.querySelector('.blue-grad');
const yelGradBtn = document.querySelector('.yell-grad');
const purpGradBtn = document.querySelector('.purp-grad');
const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('h1');
const paraEl = document.querySelector('p')
const styleSheet = document.styleSheets[0];

const gradChange = (grad1, grad2, textColor) => {
    bodyEl.style.removeProperty('background-color');
    headerEl.style.setProperty('color', textColor);
    paraEl.style.setProperty('color', textColor);
    return bodyEl.style.setProperty('background', `linear-gradient(${grad1}, ${grad2})`);
};

const colorChange = (color, textColor) => {
    bodyEl.style.removeProperty('background');
    headerEl.style.setProperty('color', textColor);
    paraEl.style.setProperty('color', textColor);
    return bodyEl.style.setProperty('background-color', color);
};

redBtn.addEventListener('click', function () {colorChange('red', 'black');});
whiteBtn.addEventListener('click', function () {colorChange('white', 'black');});
blueBtn.addEventListener('click', function () {colorChange('blue', 'white');});
yelBtn.addEventListener('click', function () {colorChange('yellow', 'black');});
purpBtn.addEventListener('click', function () {colorChange('purple', 'white');});
redGradBtn.addEventListener('click', function () {gradChange('rgb(255, 0, 0)', 'rgb(71, 28, 28)', 'white');});
whiteGradBtn.addEventListener('click', function () {gradChange('white', 'rgb(112, 112, 112)', 'black');})
blueGradBtn.addEventListener('click', function () {gradChange('blue', 'rgb(42, 22, 116)', 'white');})
yelGradBtn.addEventListener('click', function () {gradChange('yellow', 'rgb(145, 119, 5)', 'black');})
purpGradBtn.addEventListener('click', function () {gradChange('purple', 'rgb(52, 3, 85)', 'white');})
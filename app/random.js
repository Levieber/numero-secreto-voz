const lowerValue = 1;
const highestValue = 1000;

const secretNumber = randomNumber(highestValue);

function randomNumber() {
  return parseInt(Math.random() * highestValue + 1);
}

const elementLowerValue = document.getElementById("lower-value");
const elementHighestValue = document.getElementById("highest-value");

elementLowerValue.innerText = lowerValue;
elementHighestValue.innerText = highestValue;

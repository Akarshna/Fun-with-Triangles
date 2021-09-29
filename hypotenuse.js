const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOFSquares = a ** 2 + b ** 2;
  return sumOFSquares;
}
function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value);
  //Math.sqrt function
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  outputEl.innerText = `Length of the Hypotenuse is ${lengthOfHypotenuse}`;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

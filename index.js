const inputs = document.querySelectorAll(".angle-input");
const insTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    // console.log("The angle is formed");
    outputEl.innerText =
      "Yay! The angles are correct, You are quite Intelligent";
  } else {
    // console.log("The angle is broken");
    outputEl.innerText = "Ooh! The angles are not correct, You are quite slow";
  }
}

insTriangleBtn.addEventListener("click", isTriangle);

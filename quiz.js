const quizForm = document.querySelector(".quiz-form");
const submitAnserBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");
//Answers array
const correctAnswers = ["90 degree", "Right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (const value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  //   console.log(score);
  outputEl.innerText = "Your score is " + score;
}

submitAnserBtn.addEventListener("click", calculateScore);

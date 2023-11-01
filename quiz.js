class Quiz {
  QuestionsArr = document.querySelectorAll(".question-answer");
  quiz = document.querySelector(".quiz-container");
  form = document.querySelector(".form");
  questionCounter = 0;
  constructor() {
    this.questionFlow();
  }

  startQuiz(e) {
    if (
      e.target.getAttribute("class") &&
      e.target.getAttribute("class").includes("start-quiz-button")
    ) {
      document.querySelector(".start-quiz").classList.add("hide");
      this.form.classList.remove("hide");
      this.addAnswersQuantityContainer();
    }
  }

  questionFlow() {
    this.quiz.addEventListener("click", (e) => {
      if(!e.target.getAttribute('type')) {
        e.preventDefault();
      }

      this.startQuiz(e);

      this.nextQuestion(e);

      this.prevQuestion(e);

      this.answerSQuantityFlow(e);

      this.manWomanButton(e);
    });
  }

  manWomanButton(e) {
    if (
      e.target.getAttribute("class") &&
      e.target.getAttribute("class").includes("man-woman-button")
    ) {
      document.querySelectorAll(".man-woman-button").forEach((button) => {
        button.classList.remove("man-woman-button-active");
      });
      e.target.classList.toggle("man-woman-button-active");
    }
  }

  answerSQuantityFlow(e) {
    if (
      (e.target.getAttribute("class") &&
        e.target.getAttribute("class").includes("answer-button")) ||
      e.target.getAttribute("class").includes("previous-button")
    ) {
      document.querySelector(".answers-quantity").style.width = `${
        (this.questionCounter + 1) * (100 / 6)
      }%`;
    }
  }

  nextQuestion(e) {
    if (
      e.target.getAttribute("class") &&
      e.target.getAttribute("class").includes("answer-button")
    ) {
      this.questionCounter++;
      e.target.closest(".question-answer").classList.add("hide");
      this.QuestionsArr[this.questionCounter].classList.remove("hide");

      // Add prev button
      this.addPreviousButton();
    }
  }

  prevQuestion(e) {
    if (
      e.target.getAttribute("class") &&
      e.target.getAttribute("class").includes("previous-button")
      // e.target.getAttribute('class')
    ) {
      this.QuestionsArr[this.questionCounter].classList.add("hide");
      this.questionCounter--;
      this.QuestionsArr[this.questionCounter].classList.remove("hide");

      if (this.questionCounter === 0) {
        document.querySelector(".previous-button").remove();
      }
    }
  }

  addPreviousButton() {
    const buttonHtml = `
        <button class="previous-button button">
        <svg class="previous-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path class="previous-button" d="M19 12L5 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path class="previous-button" d="M12 19L5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </button>
      `;
    if (
      !document.querySelector(".previous-button") &&
      this.questionCounter >= 1
    ) {
      this.form.insertAdjacentHTML("afterBegin", buttonHtml);
    }
  }

  addAnswersQuantityContainer() {
    const answersQuantityHtml = `
      <div class="answers-quantity-container">
        <div class='answers-quantity' "></div>
      </div>
      `;
    this.quiz.insertAdjacentHTML("beforeend", answersQuantityHtml);
  }
}

const myApp = new Quiz();

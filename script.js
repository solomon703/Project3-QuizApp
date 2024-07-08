const questions = [
  {
    question: "PowerFull Weapon in the world ?",
    answers : [
      {text : "Love", correct:true},
      {text : "Bomb", correct:false},
      {text : "Silence", correct:true},
      {text : "War", correct:false},
    ]
  },
  {
    question: "Peace full place in the world ?",
    answers : [
      {text : "Thomb ", correct:true},
      {text : "Devotional", correct:true},
      {text : "Alone", correct:true},
      {text : "None of these", correct:false},
    ]
  },
  {
    question: "Age of Realization ?",
    answers : [
      {text : "10-19", correct:false},
      {text : "20-28", correct:true},
      {text : "29-36", correct:false},
      {text : "37-44", correct:false},
    ]
  },
  {
    question: "Responsibity comes From ?",
    answers : [
      {text : "Pain", correct:false},
      {text : "Struggles", correct:false},
      {text : "Troubles", correct:false},
      {text : "All Of These", correct:true},
    ]
  },
  {
    question: "Is EyeContact is Necessary or Not ?",
    answers : [
      {text : "Yes", correct:true},
      {text : "No", correct:false},
    ]
  },
  
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion(){
  resetState()
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct =answer.correct;
    }
    button.addEventListener("click",selectAnswer)
  });

}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}


function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    // selectedBtn.classList.add("true");
    selectedBtn.style.backgroundColor = "black";
    selectedBtn.style.color = "white";
    score++;
  }else{
    selectedBtn.style.backgroundColor = "red";
    selectedBtn.style.color = "white";
    // selectedBtn.classList.add("false");
    // score--;
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}


nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})
startQuiz();


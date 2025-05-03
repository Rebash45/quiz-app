const questions=[
    {
        question:"First president of Nigeria was?",
        answers: [
            {text: "Mohammed Buhari", correct:false},
            {text: "Wole Soyinka", correct:false},
            {text: "Bola Tinubu", correct:false},
            {text: "Nnamdi Azikwe", correct:true},
        ]
    },
    {
        question:"What's the capital of Niger state?",
        answers: [
            {text: "Jos", correct:false},
            {text: "Minna", correct:true},
            {text: "Lafia", correct:false},
            {text: "Owerri", correct:false},
        ]
    },
    {
        question:"what's the color of the Nigeria flag",
        answers: [
            {text: "Green and White", correct:true},
            {text: "Green and Red", correct:false},
            {text: "Orange and White", correct:false},
            {text: "Orange and Red", correct:false},
        ]
    },
    {
        question:"1st of ------ was when Nigeria got her independence",
        answers: [
            {text: "November 1963", correct:false},
            {text: "June 1960", correct:false},
            {text: "January 1963", correct:false},
            {text: "October 1960", correct:true},
        ]
    } 
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");    
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0
let score= 0

function startQuiz(){
    resetstate();
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "."+currentQuestion.question;

currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct; 
        }
    button.addEventListener("click", selectAnswer)
    });

}


function resetstate(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if(correct){
        score++;
        selectedButton.classList.add("correct");
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}

startQuiz();
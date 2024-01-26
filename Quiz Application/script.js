const questions=[
    {
        question: "Which is the pure OOP Langauge?",
        answers:[
            {text:"SmallTalk",correct:true},
            {text:"java",correct:false},
            {text:"Python",correct:false},
            {text:"javascript",correct:false},

        ]
    },
    {
        question: "Which is not pillar of OOPS?",
        answers:[
            {text:"Inheritance",correct:false},
            {text:"Methods",correct:true},
            {text:"Abstraction",correct:false},
            {text:"polymorphism",correct:false},
            {text:"Encapsulation",correct:false},

        ]
    },
    {
        question: "Which feature of OOP indicates code reusability?",
        answers:[
            {text:"Inheritance",correct:true},
            {text:"Encapsultion",correct:false},
            {text:"Abstraction",correct:false},
            {text:"polymorphism",correct:false},

        ]
    },
    
    
    {
        question: "What is an abstraction in object-oriented programming?",
        answers:[
            {text:"Making many forms",correct:false},
            {text:"Showing the important data",correct:false},
            {text:"Hiding the important data",correct:false},
            {text:"Hiding the implementation and showing only the features",correct:true},

        ]
    },
    {
        question: "How many types of access specifiers are provided in JAVA?",
        answers:[
            {text:"5",correct:false},
            {text:"3",correct:false},
            {text:"4",correct:true},
            {text:"2",correct:false},

        ]
    }
];

const questionElement = document.getElementById("que");
const answerbutton = document.getElementById("ans-btn");
const nextButton = document.getElementById("next-btn");

let curentQuestionIndex=0;
let score =0;

function startQuiz(){
    curentQuestionIndex =0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let curentQuestion=questions[curentQuestionIndex];
    let questionNo = curentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+curentQuestion.question;


    curentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectanswer(e){
    const selectBtn=e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showscore(){
    resetState();
    questionElement.innerHTML =`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display ="block";
}
function handleNextButton(){

    curentQuestionIndex++;
    if(curentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showscore();
    }

}

nextButton.addEventListener("click",()=>{
   if(curentQuestionIndex<questions.length){
    handleNextButton();
   }
   else{
    startQuiz();
   }
});
startQuiz();
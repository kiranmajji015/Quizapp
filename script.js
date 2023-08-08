const quizJs = [
    {
        Question : " Who won the Orange cap in the 2019 IPL for being the highest run scorer in the tournament?",
    a: "DAVID WARNER",
    b: "KL RAHUL",
    c: "VIRAT KOHLI",
    d: "None of the mentioned",
    ans: "ans1"
    },
    {
        Question: "Who claimed the Purple Cap for highest wicket taker in IPL 2019 ?",
    a: "IMRAN TAHIR",
    b: "DJ BRAVO",
    c: "BUMRAH",
    d: "RASHID KHAN",
    ans: "ans1"
    },
    {
        Question:  "Which Indian Cricketer became the fastest batsman in the world to reach 20,000 international runs mark?",
        a: "SACHIN TENDULKAR",
        b: "VIRAT KOHLI",
        c: "RICKY PONTING",
        d: "VIVAN RICHARDS",
        ans:"ans2"
    },
    {
        Question: "WHAT IS SIGNATURE SHOT OF DHONI ?",
        a: "REVERSE SWEEP",
        b: "UPPER CUT",
        c: "COVER DRIVE",
        d: "HELICOPTER",
        ans:"ans4"
    },
    {
        Question:"UNDER WHO'S CAPTAINCY INDIA WON ODI 1983 WORLD CUP?",
        a: "KAPIL DEV", 
        b: "MS DHONI",
        c:"ROHIT SHARMA",
        d: "SOURAV GANGULY",
        ans:"ans1"
    }

]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let quesCount = 0;
let score = 0;

const loadQues = () => {
    const quesList = quizJs[quesCount];

    question.innerHTML = quesList.Question;
    option1.innerHTML = quesList.a;
    option2.innerHTML = quesList.b;
    option3.innerHTML = quesList.c;
    option4.innerHTML = quesList.d;
}

loadQues();



const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizJs[quesCount].ans){
        score++;
    }

    quesCount++;
    deselectAll();
    
    if(quesCount<quizJs.length){
        loadQues();
    }
    else{
        document.getElementById("inner").hidden=true;
        showScore.innerHTML = `<h3> Your scored ${score}/${quizJs.length}</h3>
        <button class = "btn" onclick = "location.reload()"> RESTART </button>                        
        `;
        
        showScore.classList.remove('scoreArea');
    }
})
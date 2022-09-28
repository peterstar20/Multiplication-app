const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questions = document.getElementById("question");

const input = document.getElementById("input");

const scoreEl = document.getElementById("score");

questions.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

scoreEl.innerText = `score: ${score}`

if (!score) {
    score = 0;
} 

formEl.addEventListener("submit", () => {
    const userAns = +input.value;
    if(userAns === correctAns){
        score++;
        Updatelocalstorage()
        // console.log(score);
    }else{
        score--;
        Updatelocalstorage()
        // console.log(score);
    }
        
});

function Updatelocalstorage(){
    localStorage.setItem("score", JSON.stringify(score))
}


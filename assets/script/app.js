let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");


function computerChoice () {
    const choices = ['r', 'p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function convertWord(letter) { 
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "scissor";
}


function win(userChoice, computerChoicee) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertWord(userChoice)}  beats ${convertWord(computerChoicee)}. You win `;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('green-glow')
    }, 1000);
}

function loose(userChoice, computerChoicee) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertWord(userChoice)}  beats ${convertWord(computerChoicee)}. You Loose `;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('red-glow')
    }, 1000);
}

function draw(userChoice, computerChoicee) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertWord(userChoice)}  equals ${convertWord(computerChoicee)}. It's a draw `;
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('yellow-glow')
    }, 1000);
}

function game(userChoice) {
    const computerChoicee = computerChoice();
    // console.log("user choice =>" + userChoice);
    // console.log("computer choice =>" + computerChoicee);
    switch(userChoice + computerChoicee) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoicee);
        break;

        case "rp":
        case "ps":
        case "sr":
            loose(userChoice,computerChoicee);
        break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoicee);
        break;
    }
}



rock.addEventListener('click', function () {
    game("r");
});

paper.addEventListener('click', function () {
    game("p");
});

scissor.addEventListener('click', function () {
    game("s");
});


const randomChoices = ["rock", "paper", "scissor"];
const [won, draw, lost, resultdiv, computer_choice, player_choice,computer_choice_txt,player_choice_txt, rounds_left_display, reset, display_rounds] = [
  document.querySelector(".won"),
  document.querySelector(".draw"),
  document.querySelector(".lost"),
  document.getElementById("result"),
  document.querySelector(".computer-choice"),
  document.querySelector(".player-choice"),
  document.querySelector(".computer-choice-txt"),
  document.querySelector(".player_choice_txt"),
  document.querySelector(".rounds_left_to_play"),
  document.querySelector("#reset"),
  document.querySelector("#display_rounds"),
];
let won_score = 0, draw_score = 0, lost_score = 0;
let roundsPlayed = 3;


const updateScores = (result, color, playerValue, computerValue) => {
    resultdiv.innerHTML = result;
    resultdiv.style.color = color;
    player_choice.innerHTML = `${
        playerValue === "paper" ? '<i class=" fa-5x fa-solid fa-hand paper hover-icon"></i>' :
        playerValue === "scissor" ? '<i class=" fa-5x fa-solid fa-hand-scissors hover-icon"></i>' :
        playerValue === "rock" ? '<i class=" fa-5x fa-solid fa-hand-back-fist hover-icon"></i>' :
        ''
    }`;
    
    computer_choice.innerHTML = `${
        computerValue === "paper" ? '<i class=" fa-5x fa-solid fa-hand paper hover-icon"></i>' :
        computerValue === "scissor" ? '<i class="border border-primary rounded p-2 fa-5x fa-solid fa-hand-scissors hover-icon"></i>' :
        computerValue === "rock" ? '<i class=" p-2 fa-5x fa-solid fa-hand-back-fist hover-icon"></i>' :
        ''
    }`;
};

const onClick = (value) => {
    if (roundsPlayed > 0) {
        const indexRandom = Math.floor(Math.random() * randomChoices.length);
        const computer = randomChoices[indexRandom];

        if (computer === value) {
            updateScores("It's a draw", "#8ecae6", value, computer);
            draw_score++;
            draw.innerHTML = draw_score;
            
            
        } else if ((value === "paper" && computer === "rock") || (value === "scissor" && computer === "paper") || (value === "rock" && computer === "scissor")) {
            updateScores("You Won This Round", "#219ebc", value, computer);
            won_score++;
            won.innerHTML = won_score;
            won.style.transform="rotate(180deg)";
        } else {
            updateScores("You Lost This Round", "#fb8500", value, computer);
            lost_score++;
            lost.innerHTML = lost_score;
        }

        roundsPlayed--;
        rounds_left_display.innerHTML = roundsPlayed;

        if (roundsPlayed === 0) {
            reset.style.display="block";
            display_rounds.style.display="none";
            
            if(won_score === lost_score)
            {
                resultdiv.innerHTML = "It's a tie! Scores are equal.";
                resultdiv.style.fontSize="30px";

            }else if(won_score > lost_score)
            {
                resultdiv.innerHTML = "You Won This Match!";
                resultdiv.style.fontSize="30px";
            }
            else
            {
                resultdiv.innerHTML = "You Lost This Match!";
                resultdiv.style.fontSize="30px";
            }
            
        }
    }
}
reset.addEventListener('click', function () {
    won.innerHTML = "";
    lost.innerHTML = "";
    draw.innerHTML = "0";
    won_score = 0;
    draw_score = 0;
    lost_score = 0;
    roundsPlayed = 3;
    reset.style.display = "none";
    display_rounds.style.display = "block";
    resultdiv.innerHTML = "";
    playerValue="";
    computerValue="";
});


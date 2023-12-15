const randomChoices = ["rock","paper","scissor"];
let won=document.querySelector(".won");
let draw=document.querySelector(".draw");
let lost=document.querySelector(".lost");
let resultdiv = document.getElementById("result");
let computer_choice=document.querySelector(".computer-choice");
let player_choice = document.querySelector(".player-choice");
let result_container=document.querySelector(".result-container");
let rounds_left_display=document.querySelector(".rounds_left_to_play");
let reset=document.querySelector("#reset");
let display_rounds=document.querySelector("#display_rounds");
let won_score=0,draw_score=0,lost_score=0; 
let roundsPlayed=3;
let result;


//onclick
const onClick = (value)=>{
    if (roundsPlayed > 0) 
    {
        //random choise
        var indexRandom = Math.floor(Math.random() * randomChoices.length);
        var computer = randomChoices[indexRandom];

        //if computer choice and the player choice are equal then it's
        if (computer === value) {
            resultdiv.innerHTML = "It's a draw";
            player_choice.innerHTML = `You Chose: ${value}`;
            computer_choice.innerHTML = `Computer Chose: ${computer}`;
            value = ""; computer = "";
            draw_score++;
            draw.innerHTML = draw_score;
            resultdiv.style.color = "#8ecae6";
        } else if ((value === "paper" && computer === "rock") || (value === "scissor" && computer === "paper") || (value === "rock" && computer === "scissor")) {
            resultdiv.innerHTML = "You Won This Round";
            resultdiv.style.color = "#219ebc";
            player_choice.innerHTML = `You Chose: ${value}`;
            computer_choice.innerHTML = `Computer Chose: ${computer}`;
            value = ""; computer = "";
            won_score++;
            won.innerHTML = won_score;
        } else {
            resultdiv.style.color = "#fb8500";
            resultdiv.innerHTML = "You Lost This Round";
            player_choice.innerHTML = `You Chose: ${value}`;
            computer_choice.innerHTML = `Computer Chose: ${computer}`;
            value = ""; computer = "";
            lost_score++;
            lost.innerHTML = lost_score;
        }
        roundsPlayed--;
        rounds_left_display.innerHTML=roundsPlayed;

        if(roundsPlayed===0)
        {
            reset.style.display="block";
            display_rounds.style.display="none";
            
            if(won_score === lost_score)
            {
                resultdiv.innerHTML = "It's a tie! Scores are equal.";
                resultdiv.style.fontSize="25px";

            }else if(won_score > lost_score)
            {
                resultdiv.innerHTML = "You Won This Match!";
                resultdiv.style.fontSize="25px";
            }
            else
            {
                resultdiv.innerHTML = "You Lost This Match!";
                resultdiv.style.fontSize="25px";
            }
        }
    } 
}


reset.addEventListener('click',function () 
{
    won.innerHTML = 0;
    lost.innerHTML = 0;
    draw.innerHTML = 0;
    won_score=0;
    draw_score=0;
    lost_score=0;
    roundsPlayed = 3;
    reset.style.display="none";
    display_rounds.style.display="block";
    resultdiv.innerHTML = "";
    player_choice.innerHTML = `You Chose:`;
    computer_choice.innerHTML = `Computer Chose:`;

    
})

const randomChoices = ["rock","paper","scissor"];
let won=document.querySelector(".won");
let draw=document.querySelector(".draw");
let lost=document.querySelector(".lost");
let resultdiv = document.getElementById("result");
let computer_choice=document.querySelector(".computer-choice");
let player_choice = document.querySelector(".player-choice");
let result_container=document.querySelector(".result-container");
let won_score=0,draw_score=0,lost_score=0; 
let roundsPlayed=3;
let result;

//random choise

//onclick
const onClick = (value)=>{
    var indexRandom = Math.floor(Math.random()*randomChoices.length);
    var computer = randomChoices[indexRandom];
    //check if rounds played are equal to 
    if(roundsPlayed===0)
    {
        if (won_score > lost_score) 
        {
            document.getElementById("congratulations").style.display = "block";
            alert("congratulations");
        }
        else
        alert("loser");
    }
   
    if (computer===value)
    {
        player_choice.innerHTML=`You Chose :`;
        computer_choice.innerHTML=`Computer Chose:`;
        resultdiv.innerHTML="it is a draw";
        player_choice.innerHTML=`You Chose : ${value}`;
        computer_choice.innerHTML=`Computer Chose: ${computer}`;
        value="";computer="";
        draw_score++;
        roundsPlayed++;
        draw.innerHTML=draw_score;
        resultdiv.style.color="#8ecae6";
    }else
    if((value==="paper") && (computer==="rock")||(value==="scissor") && (computer==="paper")||(value==="rock") && (computer==="scissor"))
    {
        player_choice.innerHTML=`You Chose :`;
        computer_choice.innerHTML=`Computer Chose:`;
        resultdiv.innerHTML="You Won This Round ";
        resultdiv.style.color="#219ebc";
        player_choice.innerHTML=`You Chose : ${value}`;
        computer_choice.innerHTML=`Computer Chose: ${computer}`;
        value="";computer="";
        won_score++;
        won.innerHTML=won_score;
    }else
    {
        player_choice.innerHTML=`You Chose :`;
        computer_choice.innerHTML=`Computer Chose:`;
        resultdiv.style.color="#fb8500";
        resultdiv.innerHTML="You Lost This Round";
        player_choice.innerHTML=`You Chose : ${value}`;
        computer_choice.innerHTML=`Computer Chose: ${computer}`;
        value="";computer="";
        lost_score++;
        lost.innerHTML=lost_score;
    }
    roundsPlayed--;
    console.log(roundsPlayed);

}


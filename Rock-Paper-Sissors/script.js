let user=0,computer=0;
const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#message");
const userp=document.querySelector("#userscore");
const computerp=document.querySelector("#computerscore");
const playGame=(userChoice)=>{
    console.log("user choice="+userChoice);
    const computerChoice=generateComputerChoice();
    console.log("computer choice="+computerChoice);
    if(userChoice===computerChoice){
        gameDrawn();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="scissors"){
            userWin=computerChoice==="rock"?false:true;
        }
        else{
            userWin=computerChoice==="scissors"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
    
}
const generateComputerChoice=()=>{
    const opts=["rock","paper","scissors"];
    const ch=Math.floor(Math.random()*3);
    return opts[ch];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice is clicked "+userChoice);
        playGame(userChoice);
    })
})
const gameDrawn=()=>{
    console.log("Its a draw");
    message.innerText="Its a draw";
    message.style.backgroundColor="yellow";
}
const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        user++;
        userp.innerText=user;
        console.log("You won");
        message.innerText=`You Won ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor="green";
    }else{
        computer++;
        computerp.innerText=computer;
        console.log("You lost");
        message.innerText=`You Lost ${computerChoice} beats ${userChoice}`;
        message.style.backgroundColor="red";
    }
}
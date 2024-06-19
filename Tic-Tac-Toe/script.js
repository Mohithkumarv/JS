let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#newgame");
let messageContainer=document.querySelector(".msg-container");
let message=document.querySelector("#msg");
let mainClass=document.querySelector(".mainClass");
let turnO=true;
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
boxes.forEach(box => {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

const checkWinner=()=>{
    for (let pat of winPatterns) {
        let pos1=boxes[pat[0]].innerText,pos2=boxes[pat[1]].innerText,pos3=boxes[pat[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner "+pos1);
                showWinner(pos1);
            }
        }
    }
}
const showWinner=(pos1)=>{
    message.innerText=`Congratulations winner is ${pos1}`;
    messageContainer.classList.remove("hide");
    mainClass.classList.add("hide")
    disableBoxes();
}
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    messageContainer.classList.add("hide");
    mainClass.classList.remove("hide");
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
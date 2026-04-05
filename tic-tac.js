let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".new-game");
let winMsg = document.querySelector(".win-msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
    msgContainer.classList.remove("hide");
}
let enableBoxes = ()=>{
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    msgContainer.classList.add("hide");

}

let showWinner = (winner)=>{
    winMsg.innerText = `Congratulations,winner is ' ${winner}'🎉🎉🎉`;
    disableBoxes();
}

let checkWinner = ()=>{
    for(pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
        
    }
}
boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

resetBtn.addEventListener("click",enableBoxes);
newGame.addEventListener("click",enableBoxes);
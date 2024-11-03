let resetbtn=document.querySelector(".reset-btn");
let boxes=document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno=true;
let count=0;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turno=true;
    count=0;
    enable();
    msgContainer.classList.add("hide");
    
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno==true){
            box.innerText="x";
            
            turno=false;
        }else{
            box.innerText="o";
            
            turno=true;
        }
        count++;
        box.disabled=true;
        let isWinner=checkWinner();
        if(count===9&&!isWinner){
            draw();
        }
            
    });
});
const draw =()=>{
    msg.innerText=`Match is draw`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
const disabledBoxes=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
};

const enable=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
msg.innerText=`Congratulation, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disabledBoxes();
};

const checkWinner=()=>{
for (let pattern of winPattern) {
     let value0= boxes[pattern[0]].innerText;
     let value1= boxes[pattern[1]].innerText;
     let value2= boxes[pattern[2]].innerText;
     if(value0!=""&&value1!=""&&value2!=""){
        if(value0===value1&&value1===value2){
            showWinner(value0);
            return true;
        }
     }
}
};
resetbtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
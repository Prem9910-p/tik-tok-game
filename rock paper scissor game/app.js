let userCount=0;
let compCount=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userWin=document.querySelector(".userWin");
const compWin=document.querySelector(".compWin");

const  showWinner=(win, userChoice, compChoice)=>{
    if(win){
        userCount++;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        userWin.innerText=userCount;
        msg.style.backgroundColor="green";
    }else{
    compCount++;
        console.log(" you lose");
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        compWin.innerText=compCount;
        msg.style.backgroundColor="red";
    }
}
const gameDrow=()=>{
    
    msg.innerText="game is draw";
}
const compGen=()=>{
    const option=["paper", "rock", "scissors"];
    const optionIndex=Math.floor(Math.random()*3);
    return option[optionIndex];
}

const PlayGame=(userChoice)=>{
    const compChoice=compGen();
    console.log("user choice is", userChoice);
    console.log("comp choice is", compChoice);

    if(userChoice===compChoice){
        gameDrow();
    }else {
        let win=true;

        if(userChoice=="paper"){
            win=compChoice==="rock"?true:false;
        }else
        if(userChoice==="rock"){
           win= compChoice==="scissors"?true:false;
        }else{
            win=compChoice==="paper"?true:false;
        }
        showWinner(win, userChoice, compChoice);
    }
    
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
   
     PlayGame(userChoice);
});
});
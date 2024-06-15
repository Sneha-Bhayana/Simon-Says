let userseq = [];
let gameseq = [];
let btns = ["red","green","yellow","purple"];
let highest =[];

let started = false;
let level = 0;

let h2 =  document.querySelector("h2");
let h1 =  document.querySelector("h1");


document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        levelUp();
    }
})

function levelUp(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
}
 function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
            }
    } 
    else{
        h2.innerHTML = `Game over ! Your score was <b>${level}<b>. <br>Press any key to restart.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
    highest.push(level);

        restart();
    }
 }

function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function restart(){
    displayHighest();
    started = false;
    userseq=[];
    gameseq=[];
    level = 0;
}

let high = document.createElement("h4");
h1.appendChild(high);

let score=0;
function displayHighest(){
    for(i=0;i<=highest.length;i++){
        if(highest[i]>score){
            score = highest[i];
        }
    }
    high.innerText = `Highest score = ${score}`;
}


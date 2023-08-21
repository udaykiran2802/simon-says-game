let gameSeq=[];
let userSeq=[];
  let started=false;
  let hScore= 0;
  let level=0;
  let btns=["red","green","yellow","blue"];
let h2 = document.querySelector('h2');


  document.addEventListener("keypress", function(e){
    if(started==false){
        console.log("game started");
            started=true;
            levelup();
    }
  });
  function gameflash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);
  }
  function userflash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
  }

function checkAns(idx){
// console.log("curr level:",level)

 if(userSeq[idx]=== gameSeq[idx]){
    if(userSeq.length===gameSeq.length){
       setTimeout( levelup,1000);
    }
    // console.log("same value");
 }else{
    console.log("not same / game over");
    if(level>hScore){
        hScore = level;
    }else{

    }
    h2.innerHTML = `Game over! Your score was <b> ${level}</b> <br><b>Highest score:</b> ${hScore} <br>Press any key to start.`
    let body = document.querySelector('body');
    body.style.backgroundColor = "red";
     setTimeout(function(){
        body.style.backgroundColor = "white";
    },250);

    reset();
 }
}


  function levelup(){
    userSeq =[];
      level++;
      h2.innerText= `level ${level}`;
     let ranIdx= Math.floor(Math.random()*3);
     let randColor = btns[ranIdx];
     let randBtn  = document.querySelector(`.${randColor}`);
     
     gameSeq.push(randColor);
     console.log(gameSeq);
     gameflash(randBtn);
  }

  function btnPress(){
    let btn = this;
    userflash(btn)
    // console.log(this);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
  }


  let allBtns = document.querySelectorAll('.btn');
  for(btn of allBtns){
    btn.addEventListener("click",btnPress);
  }


function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}
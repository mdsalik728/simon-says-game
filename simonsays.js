let gameSeq=[];
let userSeq=[];
let HScore = 0;

let btn=["red","green","yellow","purple"];

 let started=false;
 let level=0;
 let h2=document.querySelector("h2");
 document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started = true;
        levelUp();
    }
 })

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("user-Flash");
    setTimeout(function(){
            btn.classList.remove("user-Flash")
       },250);

    }
function levelUp(){
    
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomIndx= Math.floor(Math.random()*4);
    
    let randomClr= btn[randomIndx];
    let randombtn= document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr);
    btnFlash(randombtn);
      
}
  
function CheckAns(idx){
    if(level>0){
 if(userSeq[idx]==gameSeq[idx]){
    if(idx==gameSeq.length-1){
        setTimeout( levelUp,1000);
        
    }

 }else{
    h2.innerText=`Game over !! Your score is ${level}! Press anykey to continue`;
    let body=document.querySelector("body");
    let aler = setInterval(function(){
    body.style.backgroundColor="red";
    setTimeout(function(){
        body.style.backgroundColor="white";
    },300);
    },500);
    document.addEventListener("keypress",function(){
        clearInterval(aler);
    });
    

    if(HScore <= level){
        HScore = level;
        let h3= document.querySelector("h3");
        h3.innerText=`High Score = ${HScore}`; 
    }
    reset();
    }
 }

}

 function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;

 }
function btnPress(){
  
    let btn = this;
    userFlash(btn);
    let userclr= btn.getAttribute("id");
    userSeq.push(userclr);
    CheckAns(userSeq.length-1);
   

}

 let Allbtns = document.querySelectorAll(".btn");
for(eachbtn of Allbtns){
    console.log(level);
    
   eachbtn.addEventListener("click",btnPress);
    
}

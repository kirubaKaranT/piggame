var score,rscore,aplayer;
score=[0,0];
rscore=0;
aplayer=0;
document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector(".dice").style.display='none';
document.querySelector(".btn-roll").addEventListener("click",function(){
    
 var rnum=Math.floor(Math.random()*6+1);
  document.querySelector(".dice").style.display='block';  
    document.querySelector(".dice").src="dice-"+ rnum+".png";
    if(rnum>1){
        rscore+=rnum;
        document.querySelector("#current-"+aplayer).textContent=rscore;
    }
    else{
        aplayer===0 ? aplayer=1:aplayer=0;
        rscore=0;
        document.querySelector("#current-0").textContent=0;
        document.querySelector("#current-1").textContent=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
        
    }
  winner();
    
});
document.querySelector(".btn-hold").addEventListener("click",function(){    
                score[aplayer]=score[aplayer]+rscore;
                document.getElementById("score-"+aplayer).textContent=score[aplayer];
                document.querySelector("#current-0").textContent=0;
                document.querySelector("#current-1").textContent=0;
                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');
                document.querySelector('.dice').style.display='none';
                rscore=0;
                aplayer===0 ? aplayer=1:aplayer=0;
                winner();
                
});
function winner(){
    if(score[aplayer]>=100){
        alert("player"+(aplayer+1)+"win the match");
    }
    
}
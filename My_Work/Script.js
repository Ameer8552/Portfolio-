let gamesqe=[];
let usersqe=[];
let color=["red","blue","yellow","orange"];
let start=false;
let level=0;
let h2=document.querySelector("h2");
let body=document.querySelector("body");
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        console.log("key prassed");
    }
    levels();
});
function btnflash(btn1){
    btn1.classList.add("white");
    setTimeout(function(){
        btn1.classList.remove("white");
    },200);
}
function userpressed(btn){
 btn.classList.add("green");
 setTimeout(function(){
    btn.classList.remove("green");
 },200);
}
 function levels(){
    usersqe=[];
    level++;
   h2.innerText=`Level ${level}`;
  let ranIdx=Math.floor(Math.random()*3);
  let randomc=color[ranIdx];
  let btnrandom=document.querySelector(`.${randomc}`)
  gamesqe.push(randomc);
  console.log(gamesqe);
   btnflash(btnrandom);
 };
 let btnall=document.querySelectorAll(".btn");
 for(btn of btnall){
    btn.addEventListener("click",btnpress);
 }
 function btnpress(){
    let btn=this;
    let usercolor=btn.getAttribute("id");
    userpressed(btn);
    usersqe.push(usercolor);
    console.log(usersqe);
    check(usersqe.length-1);
    };
    function check(idx){
        if(usersqe[idx] === gamesqe[idx]){
                if(usersqe.length==gamesqe.length){
                    levels();
                }
        }
        else{
           
            h2.innerHTML=`game Over! Your Score ${level} <br>Press any Key to Start</br>`;
            reset();
            body.classList.add("red1");
           setTimeout(function(){
            body.classList.remove("red1");
           },250);
    
        }
    }
    function reset(){
        start=false;
        gamesqe=[];
        usersqe=[];
        level=0;

    }
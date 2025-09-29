let boxes=document.querySelectorAll(".btn")
flag="player1"
let win=[[0,1,2],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8],[0,8,4]]
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        document.querySelector("#click").play();
        box.style.transform="scale(0.99)"
        if(flag=="player1"){
            box.innerText="O";
            flag="player2"
        }
        else{
            box.innerText="X"
            flag="player1"
            box.style.color="#97C774"
        }
        box.disabled=true;
        checkWinner()
        checkTie();
    })
});
let tie=false
let checkTie = () => {
  let allFilled = true;
  for (let box of boxes) {
    if (box.innerText === "") {
      allFilled = false; 
      break;
    }
  }
  if (allFilled && !tie) {
    document.querySelector("#winner").innerText = "It's a tie!";
    tie = true;
    for (let box of boxes) {
      box.disabled = true;
    }
  }
};

let checkWinner=()=>{
    for(let position of win){
        let val1=boxes[position[0]].innerText
        let val2=boxes[position[1]].innerText
        let val3=boxes[position[2]].innerText
        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                document.querySelector("#winner").innerText=`${val1} is the winner`
                for(let box of boxes){
                    box.disabled=true;
                }
            }
        }
    }
}   
let clear=()=>{
    flag="player1"
    for(let box of boxes){
        box.innerText=""
        box.disabled=false;
        box.style.color="#A44A3F"
        box.style.transform="scale(1)"
    }
    document.querySelector("#winner").innerText=""
}

let reset=document.querySelector(".reset")
reset.addEventListener("click",clear)


let choices=document.querySelectorAll(".img")
let sps=["stone","paper","scissor"]
let check=(userch)=>{
    ch=sps[Math.floor(Math.random()*3)]  
    if(userch==ch){
        document.querySelector(".msg").innerText="It's a Draw"
        document.querySelector(".msg").style.backgroundColor="yellowgreen"
    }else if(userch=="paper" && ch=="stone"){
        document.querySelector(".msg").innerText="You Won. Computer chose stone"
        document.querySelector(".msg").style.backgroundColor="green"
        document.querySelector(".youpoint").innerText=Number(document.querySelector(".youpoint").innerText)+1
    }
    else if(userch=="scissor" && ch=="paper"){
        document.querySelector(".msg").innerText="You Won. Computer chose paper"
        document.querySelector(".msg").style.backgroundColor="green"
        document.querySelector(".youpoint").innerText=Number(document.querySelector(".youpoint").innerText)+1
    }
    else if(userch=="stone" && ch=="scissor"){
        document.querySelector(".msg").innerText="You Won. Computer chose scissor"
        document.querySelector(".msg").style.backgroundColor="green"
        document.querySelector(".youpoint").innerText=Number(document.querySelector(".youpoint").innerText)+1
    }
    else if(ch=="paper" && userch=="stone"){
        document.querySelector(".msg").innerText="You Lost. Computer chose paper"
        document.querySelector(".msg").style.backgroundColor="red"
        document.querySelector(".comppoint").innerText=Number(document.querySelector(".comppoint").innerText)+1
    }
    else if(ch=="scissor" && userch=="paper"){
        document.querySelector(".msg").innerText="You Lost. Computer chose scissor"
        document.querySelector(".msg").style.backgroundColor="red"
        document.querySelector(".comppoint").innerText=Number(document.querySelector(".comppoint").innerText)+1
    }
    else if(ch=="stone" && userch=="scissor"){
        document.querySelector(".msg").innerText="You Lost. Computer chose stone"
        document.querySelector(".msg").style.backgroundColor="red"
        document.querySelector(".comppoint").innerText=Number(document.querySelector(".comppoint").innerText)+1
    }
}
choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        check(choice.getAttribute("id"))
    })
});


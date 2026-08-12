let box = document.querySelector("#box");
let buttons = document.querySelectorAll(".buttons");
let winner = document.querySelector("#winner");
let reset = document.querySelector("#reset");

for(let i=1; i<=9; i++){
    let row = Math.floor((i-1)/3);
    let col = (i-1)%3;

    buttons[i-1].style.position = "absolute";
    buttons[i-1].style.top = `${row*100}px`
    buttons[i-1].style.left = `${col*100}px`
}

function checkIfWon(a){
    if(player1Clicked[0] && player1Clicked[1] && player1Clicked[2]){
        winner.textContent = "Player1 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player1Clicked[3] && player1Clicked[4] && player1Clicked[5]){
        winner.textContent = "Player1 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player1Clicked[6] && player1Clicked[7] && player1Clicked[8]){
        winner.textContent = "Player1 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player1Clicked[0] && player1Clicked[3] && player1Clicked[6]){
        winner.textContent = "Player1 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player1Clicked[1] && player1Clicked[4] && player1Clicked[7]){
        winner.textContent = "Player1 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player1Clicked[2] && player1Clicked[5] && player1Clicked[8]){
        winner.textContent = "Player1 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player1Clicked[0] && player1Clicked[4] && player1Clicked[8]){
        winner.textContent = "Player1 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player1Clicked[2] && player1Clicked[4] && player1Clicked[6]){
        winner.textContent = "Player1 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },500);
        return true;
    }else if(player2Clicked[0] && player2Clicked[1] && player2Clicked[2]){
        winner.textContent = "Player2 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player2Clicked[3] && player2Clicked[4] && player2Clicked[5]){
        winner.textContent = "Player2 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player2Clicked[6] && player2Clicked[7] && player2Clicked[8]){
        winner.textContent = "Player2 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player2Clicked[0] && player2Clicked[3] && player2Clicked[6]){
        winner.textContent = "Player2 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player2Clicked[1] && player2Clicked[4] && player2Clicked[7]){
        winner.textContent = "Player2 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player2Clicked[2] && player2Clicked[5] && player2Clicked[8]){
        winner.textContent = "Player2 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player2Clicked[0] && player2Clicked[4] && player2Clicked[8]){
        winner.textContent = "Player2 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(player2Clicked[2] && player2Clicked[4] && player2Clicked[6]){
        winner.textContent = "Player2 Wins!!";
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return true;
    }else if(a==9){
        a=0;
        winner.textContent = "It's a Tie.";

        for(let i=0; i<9; i++){
            setTimeout(function(){
                player1Clicked.fill(false);
                player2Clicked.fill(false);
            },1000);

        }
        setTimeout(function(){
        winner.textContent = "Play again";
        },1000);
        return false;
    }
    return false;
}

reset.addEventListener("click",function(){
    a=0;
    for(let i=0; i<9; i++){
        buttons[i].style.backgroundColor = "#A5D6A7";
        buttons[i].textContent = "";
    }
    player1Clicked.fill(false);
    player2Clicked.fill(false);  
})
let a = 0;
let player1Clicked = Array(9).fill(false);
let player2Clicked = Array(9).fill(false);

for(let i=0; i<9; i++){
    
    buttons[i].addEventListener("click", function(){
    if(player1Clicked[i] || player2Clicked[i]){
        alert("already marked");
        return;
    }

if(a % 2 == 0){
    buttons[i].style.backgroundColor = "#D99B21";
    buttons[i].style.color = "#133458";
    buttons[i].textContent = "O";
    player1Clicked[i] = true;
}
else{
    buttons[i].style.backgroundColor = "#838921";
    buttons[i].style.color = "#FAF7BB";
    buttons[i].textContent = "X";
    player2Clicked[i] = true;
}

    a++;

    let won = checkIfWon(a);
    if(won) {
        a=0;
        
        for(let i=0; i<9; i++){
            player1Clicked.fill(false);
            player2Clicked.fill(false);     
        }
        return;
    }
    
})
}




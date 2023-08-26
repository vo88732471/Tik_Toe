
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
var a1 = prompt("enter player 1 name:");
var a2 = prompt("enter player 2 name:");
while(a1==='' || a2==='' || a1===null || a2===null || a1===a2){
    alert("Please enter The Players Name.");
    a1 = prompt("enter player 1 name:");
    a2 = prompt("enter player 2 name:");
}
let turn = a1
let isgameover = false;
document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

// Function to change the turn
const changeTurn = () => {
    return turn === a1 ? a2 : a1
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            gameover.play();
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ": The Winner"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "600px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            
            boxtext.innerText = turn;
            turn = changeTurn();
            
            if (!isgameover) {
                checkWin();
            }
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                audioTurn.play();
            }
        }
    })
})

// function for reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = a1;
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

press.addEventListener('click', () => {
    document.querySelector(".line").style.width = "0vw";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    var a3 = prompt("enter player 1 name:");
    var a4 = prompt("enter player 2 name:");
    while(a3==='' || a4==='' || a3===null || a4===null || a3===a4){
        alert("Please enter The Players Name.");
        a3 = prompt("enter player 1 name:");
        a4 = prompt("enter player 2 name:");
    }
    a1=a3;
    a2=a4;
     turn = a1;
     isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
   
    
    
})
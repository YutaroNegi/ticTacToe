let reset = document.getElementById("reset")

let player1input = document.getElementById("player1")
let player2input = document.getElementById("player2")


player1input.addEventListener('click', ()=>{
    player1input.value = ""
})
player2input.addEventListener('click', ()=>{
    player2input.value = ""
})




document.addEventListener('DOMContentLoaded', ()=>{
    let square = document.querySelectorAll(".square")

    square.forEach((square) =>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    let playerName = playerTime

    let winner = document.getElementById("winner")
    let player1input = document.getElementById("player1")
    let player2input = document.getElementById("player2")

    let player1 = player1input.value
    let player2 = player2input.value

    if(playerName == 0){
        playerName = player1
    }else{
        playerName = player2
    }
    
    let square = event.target
    let position = square.id

    if (handleMove(position)){
        winner.innerHTML = 'The Winner Is ' + playerName

     }
    updateSquare(position)
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class="${symbol}"></div>`
}


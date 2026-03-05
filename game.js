let p1number
let p2number
let turn = 1

let p1Guesses = []
let p2Guesses = []

function startGame(){

p1number = document.getElementById("p1number").value
p2number = document.getElementById("p2number").value

if(p1number=="" || p2number==""){
alert("Both players must enter a number")
return
}

document.getElementById("p1number").value=""
document.getElementById("p2number").value=""

document.getElementById("setup").style.display="none"
document.getElementById("game").style.display="block"

}

function checkGuess(){

let guess = document.getElementById("guess").value

if(guess==""){
return
}

if(turn === 1){

p1Guesses.push(guess)
document.getElementById("p1history").innerText = p1Guesses.join(", ")

if(guess == p2number){
document.getElementById("hint").innerText="🎉 Player 1 Wins!"
return
}

if(guess > p2number){
document.getElementById("hint").innerText="⬇️ Lower Number"
}else{
document.getElementById("hint").innerText="⬆️ Higher Number"
}

turn = 2
document.getElementById("turn").innerText="Player 2 Turn"

}

else{

p2Guesses.push(guess)
document.getElementById("p2history").innerText = p2Guesses.join(", ")

if(guess == p1number){
document.getElementById("hint").innerText="🎉 Player 2 Wins!"
return
}

if(guess > p1number){
document.getElementById("hint").innerText="⬇️ Lower Number"
}else{
document.getElementById("hint").innerText="⬆️ Higher Number"
}

turn = 1
document.getElementById("turn").innerText="Player 1 Turn"

}

document.getElementById("guess").value=""

}

function restartGame(){
location.reload()
}

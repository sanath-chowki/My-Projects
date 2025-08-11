const buttons=document.querySelectorAll('button')
const result=document.getElementById('result')
let pScore=0
let cScore=0
const playerScore=document.getElementById('player-score')
const computerScore=document.getElementById('computer-score')
buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        res=playRound(button.id, computerPlay())
        result.textContent=res
    })
})
function computerPlay() {
    const choices=['rock', 'paper', 'scissor']
    const randomChoice=Math.floor(Math.random()*choices.length)
    return choices[randomChoice]
}
function playRound(pSelection, cSelection) {
    if(pSelection==cSelection) return "It's a tie !"
    else if((pSelection=='rock' && cSelection=='scissor') || 
            (pSelection=='paper' && cSelection=='rock') ||
            (pSelection=='scissor' && cSelection=='paper')) {
            pScore++;
            playerScore.textContent=pScore;
            return "You won! "+pSelection+" beats "+cSelection;
        }
    else {
        cScore++;
        computerScore.textContent=cScore;
        return "You lost! "+cSelection+" beats "+pSelection;
    }
}

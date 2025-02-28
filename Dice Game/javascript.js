function winner() {
    let rngPc = Math.ceil(Math.random()*6);
    let rngPlyer = Math.ceil(Math.random()*6);
   
    var playerDice = document.querySelectorAll("img")[0];
    var randomDice = document.querySelectorAll("img")[1];

    playerDice.setAttribute('src', `images/dice${rngPlyer}.png`);
    randomDice.setAttribute('src', `images/dice${rngPc}.png`);

    let title = document.querySelector('h1');

    if(rngPc > rngPlyer){
       return title.innerText = "Player 2 Wins!! ✌️";
    } else if(rngPlyer > rngPc) {
       return title.innerText = "Player 1 Wins!! ☝️";
    } else {
     return title.innerText = "Oh Wow this was a Tie!! ⍨"
    }
}

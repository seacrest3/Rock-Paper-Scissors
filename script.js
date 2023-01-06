let wins = 0;
let losses = 0;
let ties = 0;
// 1. Initialize `choices` array: r, p, s. representing rock, paper, or scissors.
let choices = ["r", "p", "s"];
// 2. Prompt user to enter "r," "p," or "s".

function rps_game () {
    for (i = 0; i < 10; i++) {
        let userInput = prompt("enter r, p, or s");
        // 3. Computer chooses a **random** value in a list of "r," "p," or "s."
        let randomNum = Math.floor(Math.random() * choices.length);
        // console.log(randomNum);
        let computerChoice = choices[randomNum];
        // 4. We determine if the user wins or not.
        
        if ((userInput === "r") || (userInput === "p") || (userInput === "s")) {
            alert("You have chosen: " + userInput)
            alert("Computer has chosen: " + computerChoice);
        
            if (userInput === computerChoice) {
                ties++;
                alert("it's a tie");
            } else if ((userInput === "r" && computerChoice === "s" ) ||  
            (userInput === "s" && computerChoice === "p" ) ||
            (userInput === "p" && computerChoice === "r" )) {
                wins++;
                alert("you win");
            } else {
                losses++;
                alert("you lost");
            }
        } else {
            alert("Wrong choice!")
        }
    }
    return alert(`wins: ${wins} losses: ${losses} ties: ${ties}`);
}

window.onload = function() {
    rps_game();
  };

// 5. We then add to their score.

//    * If user wins, then we add one to their wins.
    
//    * If user loses, then we add one to their losses.
    
//    * If user ties, then we add one to their ties.

// 6. Prompt user to play again.
let playAgain = confirm("do you want to play again?")
// Build a rock-paper-scissors game using only JavaScript.
if (playAgain) {
    window.onload = function() {
        rps_game();
      }
}
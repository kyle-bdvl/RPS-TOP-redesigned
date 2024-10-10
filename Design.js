//function for getting the ops 

const p ='paper', r ='rock', s='scissors'
let humanChoice =null;
let computerChoice = null;

let HC=null;
let CC=null;



//not allowing users to type in the input box 

// Changed let to const
const display = document.getElementById('display');
//variables to track human and computer score
const humanScore = document.getElementById('PlayerPoints');
const computerScore = document.getElementById('ComputerPoints');
//selects all player buttons (rock, paper, scissors)
const playerButtons = document.getElementsByClassName('playerButton');
//set their scores to 0 at the start of the game
humanScore.textContent = 0;
computerScore.textContent = 0;

//to allow the commit

function getOption(op) {
  // to remove the selected button
  for(let i=0; i<playerButtons.length; i++){
    if(playerButtons[i].classList.contains("selected")){
      playerButtons[i].classList.remove("selected");
      break; //to break out of the loop for added efficiency
    }
  }
  if (op == 'paper'){
    humanChoice = p;
    //add the selected class to the button, showing that it is selected
    //applies for the below lines as well
    playerButtons[1].classList.add("selected");
  }
  else if (op =='rock'){
    humanChoice = r;
    playerButtons[0].classList.add("selected");
  }
  else {
    humanChoice = s;
    playerButtons[2].classList.add("selected");
  }
  console.log('its working'); //this line not needed, I'll leave it here anyway
  return humanChoice;
}

//add the hover effect on the player buttons
for(let i=0; i<playerButtons.length; i++){
  playerButtons[i].addEventListener("mouseover", () => {playerButtons[i].classList.add("hover");});
  playerButtons[i].addEventListener("mouseout", () => {playerButtons[i].classList.remove("hover");});
}





function getComputerChoice(){ 
  let random = Math.floor(Math.random()*3);
  if (random === 0){
    display.value = p;
    computerChoice = p; 
  }
  else if (random ===1){
    display.value = r;
    computerChoice = r; 
  }
  else {
    display.value = s;
    computerChoice = s; 
  }
  return CC = computerChoice;
}

function playRound(HC,CC){
  
  if ((HC ==s && CC == p ) ||(HC ==r && CC == s)||(HC== p && CC == r)){
    alert("Human Wins");
    // Here is the code to update the scoreboard
    humanScore.textContent = String(parseInt(humanScore.textContent)+1);
  }

  else if (HC === CC){
      alert("Tie");
  }
  else{ 
      alert("Computer Wins");
      computerScore.textContent = String(parseInt(computerScore.textContent)+1);
  }
  alert ("computer played "+CC+ "\nHuman Played "+ HC);
  //show winner
  if(humanScore.textContent == "5")
    alert("Human victory");
  else if(computerScore.textContent == "5")
    alert("Computer victory");
}

// Function to start the game after the player makes a choice
function start() {
  //prevent game from continuing after a winner has been chosen
  if(humanScore.textContent == "5" || computerScore.textContent == "5"){
    alert("Game has already ended.");
    // show winner 
    if(humanScore.textContent == "5")
      alert("Human victory");
    else
      alert("Computer victory");
    return;
  }
  else if (humanChoice === null) {
    alert("Please make a choice first!");
    return;
  }
  
  computerChoice = getComputerChoice();  // Get computer's choice after player has made a choice
  playRound(humanChoice, computerChoice); // Play the round

}

//adding some extra comments to see if the nejahsdjhxt commit works 
//fixing the git push origin main --force


//testing for a normal git push 
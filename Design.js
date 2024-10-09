//function for getting the ops 

const p ='paper', r ='rock', s='scissors'
let humanChoice =null;
let computerChoice = null;

let HC=null;
let CC=null;



//not allowing users to type in the input box 

let display = document.getElementById('display');


//to allow the commit

 function getOption(op) {
  if (op == 'paper'){
    humanChoice = p;
    console.log('its working');
    return  humanChoice;
    
  }
  else if (op =='rock'){
    humanChoice = r;
    console.log('its working');
    return humanChoice;
  }
  else {
    humanChoice = s;
    console.log('its working');
    return humanChoice;
  }
  
}






function getComputerChoice(){ 
  let random = Math.floor(Math.random()*3);
  if (random === 0){
    display.value= p;
    computerChoice= p; 
    return CC =computerChoice;
  }
  else if (random ===1){
    display.value= r;
    computerChoice= r; 
    return  CC= computerChoice;
  }
  else {
    display.value=s;
    computerChoice= s; 
    return CC=  computerChoice;
  }
}

function playRound(HC,CC){
    
  if ((HC ==s && CC == p ) ||(HC ==r && CC == s)||(HC== p && CC == r))
      alert("Human Wins")
  else if (HC === CC){
      alert("Tie");
  }
  else{ 
      alert("Computer Wins");
  }
  alert ("computer played "+CC+ "\nHuman Played "+ HC);

}

// Function to start the game after the player makes a choice
function start() {
  if (humanChoice === null) {
    alert("Please make a choice first!");
    return;
  }
  
  computerChoice = getComputerChoice();  // Get computer's choice after player has made a choice
  playRound(humanChoice, computerChoice); // Play the round

}

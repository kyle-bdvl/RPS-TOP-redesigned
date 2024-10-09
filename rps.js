//function for getting the options 

const p ='paper', r ='rock', s='scissors'
let humanOption;
var humanScore =0, computerScore =0;

//not allowing users to type in the input box 

let display = document.getElementById('display');

//function to start the game 
function startGame(){
 let CC = getComputerChoice();

 playRound(HC,CC);

}
//to allow the commit

let getOption =(option) => {
  if (option === 'paper'){
    return p
  }
  else if (option ==='rock'){
    return r;
  }
  else {
    return s;
  }
}

function getComputerChoice(){ 
  let computerAnswerText="";
  let random = Math.floor(Math.random()*3);
  if (random === 0){
    display.value= p;
      return p;
  }
  else if (random ===1){
    display.value= r;
      return r;
  }
  else {
    display.value="scissors";
      return s;
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




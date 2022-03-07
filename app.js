const choices = document.querySelectorAll(".choice");
const resultContainer = document.querySelector(".result-container");

let selectedChoice = "";
let cpuSelectedChoice = "";

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        if(choice === choices[0]){
            selectedChoice = "rock";
        }
        else if(choice === choices[1]){
            selectedChoice = "paper";
        }
        else if(choice === choices[2]){
            selectedChoice = "scissors"
        }
    } );
});


let cpuChoice = function(){
    let cpuRandomNumber = Math.floor(Math.random()*3);
    if(cpuRandomNumber === 0){
        cpuSelectedChoice = "rock";
    }
    else if(cpuRandomNumber === 1){
        cpuSelectedChoice = "paper";
    }
    else if(cpuRandomNumber === 2){
        cpuSelectedChoice = "scissors"
    }
    
}

let battle = function(){

}

cpuChoice();
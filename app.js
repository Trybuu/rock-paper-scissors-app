const choices = document.querySelectorAll(".choice");
const resultContainer = document.querySelector(".result-container");

let selectedChoice = "";
let aiSelectedChoice = "";

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        if(choice === choices[0]){
            selectedChoice = "rock";
            cpuChoice();
            showResult();
        }
        else if(choice === choices[1]){
            selectedChoice = "paper";
            cpuChoice();
            showResult();
        }
        else if(choice === choices[2]){
            selectedChoice = "scissors";
            cpuChoice();
            showResult();
        }
    })
});

let cpuChoice = function(){
    let cpuRandomNumber = Math.floor(Math.random()*3);
    if(cpuRandomNumber === 0){
        aiSelectedChoice = "rock";
    }
    else if(cpuRandomNumber === 1){
        aiSelectedChoice = "paper";
    }
    else if(cpuRandomNumber === 2){
        aiSelectedChoice = "scissors"
    }
    
};



let battle = function(){
    let result;
    if(selectedChoice == "rock" && aiSelectedChoice == "paper"){
        return result = "You lose!";
    }
    else if(selectedChoice == "rock" && aiSelectedChoice == "scissors"){
        return result = "You won!";
    }
    else if(selectedChoice == "paper" && aiSelectedChoice == "rock"){
        return result = "You won!";
    }
    else if(selectedChoice == "paper" && aiSelectedChoice == "scissors"){
        return result = "You lose!";
    }
    else if(selectedChoice == "scissors" && aiSelectedChoice == "rock"){
        return result = "You lose!";
    }
    else if(selectedChoice == "scissors" && aiSelectedChoice == "paper"){
        return result = "You won!";
    }
    else{
        return result = "Draw";
    }
};


// RESULT
let resultText = document.createElement("h1");
resultContainer.appendChild(resultText);

let showResult = function(){
    resultText.innerHTML = `${battle()} <br> AI : ${aiSelectedChoice}`;
}



console.log(selectedChoice, aiSelectedChoice);



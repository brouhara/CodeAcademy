var userChoice;
var computerChoice;

play();

var play = function() {
    getUserChoice();
    getComputerChoice();
    
    compareChoices(userChoice, computerChoice);
};

var tieBreaker = function() {
    
    console.log( "The result is a tie!" );
    
    if ( confirm("Play Again?") )
    {
        play();
    }
    
};

var getUserChoice = function() {
    
    while( userChoice != "rock" || "paper" || "scissors" || "rope")
    {
        userChoice = prompt("Do you choose rock, paper, scissors, rope?");
    }
    
};

var getComputerChoice = function() {
    
    computerChoice = Math.random();
    
    if (computerChoice < 0.25) 
    {
    	computerChoice = "rock";
    }
    
    else if (computerChoice <= 0.5)
    {
    	computerChoice = "paper";
    } 
    
    else if (computerChoice <= 0.75) 
    {
    	computerChoice = "scissors";
    } 
    
    else
    {
        computerChoice = "rope";
    }
    
    console.log("Computer: " + computerChoice);
    
};

var compareChoices = function(choice1, choice2) {
    
    if (choice1 === choice2) 
    {
        tieBreaker();
    } 
    
    else if ( choice1 === "rock" )
    {
        
        if ( choice2 === "scissors") 
        
        {
            return "rock wins";   
        }
        
        else if ( choice2 === "rope" )
        
        {
            tieBreaker();
        }
        
        else
        
        {
            return "paper wins";
        }
        
    }
    
    else if (choice1 === "paper") 
    {
        
        if (choice2 === "rock")
        
        {
            return "paper wins";
        }
        
        else if ( choice2 === "rope" )
        
        {
            tieBreaker();
        }
        
        else 
        {
            return "scissors wins";
        }
    }
};


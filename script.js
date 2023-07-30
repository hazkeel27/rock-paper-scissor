function computerInput() // Generates Computer Input
{
    inputArray = ['R', 'P', 'S'];

    var input = Math.floor(Math.random() * 3);

    window.alert("Computer chose: " + inputArray[input]);

    return inputArray[input]; // returns computer input
}

function userInput() // Requests user input
{
    var input = window.prompt("Enter R, P, or S:");

    if (input === "R" || input === "P" || input === "S")
    {
        return input; // returns R, P, or S
    }
    else
    {
        return input = false; // returns false if invalid input entered
    }
}

function showResult(human, robot) // returns result of null, true, or false after comparing computer and user inputs
{
    var result;

    if (human === robot)
    {
        result = null;
    }
    else if ((human === 'R' && robot === 'S') 
            || (human === 'P' && robot === 'R') 
            || (human === 'S' && robot === 'P'))
    {
        result = true;
    }
    else if ((robot === 'R' && human === 'S') 
            || (robot === 'P' && human === 'R') 
            || (robot === 'S' && human === 'P'))
    {
        result = false;
    }

    return result; // null = tie, true = winner, false = loser
}


//declare variables
var userAnswer = true;
var ties = 0;
var wins = 0;
var losses = 0;

while (userAnswer === true) // while user wants to play, continue the loop
{
    var u = userInput(); // returns user input

    if (u === 'R' || u === 'P' || u === 'S') // doesn't execute the reset of the code until user enters valid input
    {
        var c = computerInput(); // returns computer input
        var r = showResult(u, c); // returns result

        // is statement prints alert based on the result and increments it
        if (r === null)
        {
            ties++;
            window.alert("It's a Tie!");
        }
        else if (r === true)
        {
            wins++;
            window.alert("You Win!");
        }
        else if (r === false)
        {
            losses++;
            window.alert("Computer Wins!");
        }

        window.alert(`Current Score: ${wins} Wins, ${losses} Losses, & ${ties} Ties.`); // shows the results

        var userAnswer = window.confirm("Would you like to play again?"); // asking user to play again, if no then userAnswer returns false and loop ends
    }
    else 
    {
        window.alert("Invalid Entry!"); // invalid entry restarts the loop
    }
}


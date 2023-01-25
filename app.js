// function testSite(){
//     console.log('app.js has started');
//     alert ('It\'s working properly!');
// }

let secInt;
let numInt;
let randomInt;
let userName;
let guessCount = 0; // each if statement needs to add 1 to the guessCount to count total guess.

//Welcome user to start and establishes the secert number
function welcome(){

    /*
        I: User input of a number; help them get the seceret number within 3 guess or else close loop
            
        O: if the user guess num is correct, to high, or to low. if number is correct stop fuction and let user know
        C: Integer between 1 and 100
        E: Typing in a non-Int or int over 100.

    */

    randomInt = Math.floor(Math.random() * 100);

    console.log(randomInt);
    
    userName = prompt('what is your name?');
    alert (`Welcome ${userName}!`);
    return guessing();

}

function guessResults(){

    let vaildGuess = false;

    while(!vaildGuess){
        const result1 = intialGuess();
        const result2 = followUpGuess();
        if ((result1 = `${userName} that is correct!`) || (result2 = `${userName} there you go, finally!`)){
            vaildGuess = true;
        }
    }



}

//allows the user to guess a number
function guessing(){
    //console.log('User is guessing!')
    numInt = prompt('Pick a number between 1 and 100!');
    //let num = numInt * 1;
    if (isNaN(numInt)){
        secInt = prompt('Ok wise guy lets try an actual number!');
    }else{
        if (numInt <= 100){
            alert (`You selected ${numInt}!`);
            
            console.log(numInt);
            return intialGuess();
        }else{
            alert ('Shooting for the moon. Try Again!');
            return location.reload();
        }
        
    }

    if (isNaN(secInt)){
        alert ('Go back to school to learn your numbers!');
        return location.reload();

    }else{
        if(secInt <= 100){
            alert (`Now ${secInt} is a number what a smart person!`);
            
            console.log(secInt);
            return intialGuess();
        }else{
            alert ('Obviously this is not your day. Try Again!');
            return location.reload();
        }
    }
}



//initial guess the user does at the welcome screen
function intialGuess(){
        
    console.log('Intial guess being judged.');
    
    if (!isNaN(numInt)){
        if(numInt > randomInt){
            alert('A tad to high');
            guessCount = guessCount += 1;
            return  followUpGuess();
        }else if (numInt < randomInt){
            alert('Aim a little higher');
            guessCount = guessCount += 1;
            return  followUpGuess();
        }else{
            guessCount = guessCount +=1;
            alert(`${userName} that is correct! It took you ${guessCount} guess!`);
        }
    }

    if (!isNaN(secInt)){
        if(secInt > randomInt){
            alert('A tad to high');
            guessCount = guessCount += 1;
            return  followUpGuess();
        }else if (secInt < randomInt){
            alert('Aim a little higher');
            guessCount = guessCount += 1;
            return  followUpGuess();
        }else{
            guessCount = guessCount += 1;
            alert(`${userName} that is correct! It took you ${guessCount} guess!`);
        }
    }


}

function followUpGuess(){
    /*
    I: The user guessed wrong and has been given advise to the next clue
    o: one of three possible out comes; 1) a little high, 2) a little low, or 3) correct!
    C: Keeping with checking the number parameters from the intiail guess
    */

    nextInt = prompt('Guess another number between 1 and 100!');


    if (!isNaN(nextInt)){
        if (nextInt > randomInt){
            alert('Aim Lower');
            guessCount = guessCount += 1;
            return  followUpGuess();
        }else if (nextInt < randomInt){
            alert('Tad higher');
            guessCount = guessCount += 1;
            return  followUpGuess();
        }else {
            guessCount = guessCount += 1;
            alert(`${userName} there you go,  it only took you ${guessCount} guess!!`);
        }
    }else{
        alert (`Look, ${userName}, we\'ve already gone over the parametetrs!`);
        guessCount = guessCount += 1;
        return  followUpGuess();
    }

}

function leaderBoard(){
    /*
       I: Record User attempts and keep top 10 scores
       O: display the top 10 users attempts
       C: after 10 drop previous history
       E: duplicate recorded scores 
    */

    

}


//testSite();
welcome();
console.log("Guess Count = " + guessCount);

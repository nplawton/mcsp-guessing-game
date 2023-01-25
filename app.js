// function testSite(){
//     console.log('app.js has started');
//     alert ('It\'s working properly!');
// }

let secInt;
let numInt;
let randomInt;
let userName;
let guessCount = 0; // each if statement needs to add 1 to the guessCount to count total guess.
let guessHisI = []; // guess history stored first time.
let guessHisF = []; // guess history stored follow on attempts.

//Welcome user to start and establishes the secert number
function init(){

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


    
    let vaildGuess = false;
    

    while(!vaildGuess){
        const result1 = intialGuess();
        const result2 = followUpGuess();
        console.log("Guess history: " + guessHisI + guessHisF);
        console.log('Times guessed: ' + guessCount);

        if ((result1 === `${userName} that is correct! It took you ${guessCount} guess!`) || (result2 === `${userName} there you go, finally!`)) {
            vaildGuess = true;
            break;
        }
    }

    guessing();

}


//allows the user to guess a number
function guessing(){

    
    //console.log('User is guessing!')
    numInt = prompt(`${userName}Pick a number between 1 and 100!`);
    //let num = numInt * 1;
    if (isNaN(numInt)){
        secInt = prompt('Ok wise guy lets try an actual number!');
    }else{
        if (numInt <= 100){
            alert (`${userName}, you selected ${numInt}!`);
            
            console.log(numInt);
            intialGuess();
        }else{
            alert (`${userName}, you'reShooting for the moon. Try Again!`);
            location.reload();
        }
        
    }

    if (isNaN(secInt)){
        alert (`Go back to school to learn your numbers, ${userName}!`);
        location.reload();

    }else{
        if(secInt <= 100){
            alert (`Now ${secInt} is a number what a smart person!`);
            
            console.log(secInt);
            intialGuess();
        }else{
            alert (`Obviously this is not your day, ${userName}. Try Again!`);
            location.reload();
        }
    }
}



//initial guess the user does at the welcome screen
function intialGuess(){
        
    console.log('Intial guess being judged.');
    let guessHis1 = [];
    let guessHis2 = [];
    guessHisI = guessHis1.concat(guessHis2);
    
    if (!isNaN(numInt)){
        guessHis1.push(numInt)
        if(numInt > randomInt){
            guessCount = guessCount += 1;
            alert ( `A tad to high, ${userName}`);
            followUpGuess();
        }else if (numInt < randomInt){
            guessCount = guessCount += 1;
            alert ('Aim a little higher');
            followUpGuess();
        }else{
            guessCount = guessCount +=1;
            alert (`${userName} that is correct! It took you ${guessCount} guess!`);
            //replay();
        }
    }

    if (!isNaN(secInt)){
        guessHis2.push(secInt)
        if(secInt > randomInt){
            guessCount = guessCount += 1;
            alert (`A tad to high, ${userName}`);
            followUpGuess();
        }else if (secInt < randomInt[1]){
            guessCount = guessCount += 1;
            alert (`Aim a little higher, ${userName}`);
            followUpGuess();
        }else{
            guessCount = guessCount += 1;
            alert (`${userName} that is correct! It took you ${guessCount} guess!`);
            //replay();
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
    guessHisF.push(nextInt);

    if (!isNaN(nextInt)){
        if (nextInt > randomInt){
            alert(`Aim Lower, ${userName}`);
            guessCount = guessCount += 1;
            followUpGuess();
        }else if (nextInt < randomInt){
            guessCount = guessCount += 1;
            alert (`Tad higher, ${userName}`);
            followUpGuess();
        }else {
            guessCount = guessCount += 1;
            alert (`${userName} there you go,  it only took you ${guessCount} guess!!`);
            //replay();
        }
    }else{
        alert (`Look, ${userName}, we\'ve already gone over the parametetrs!`);
        guessCount = guessCount += 1;
        followUpGuess();
    }

}

// function leaderBoard(){
//     /*
//        I: Record User attempts and keep top 10 scores && alert user to their score after guessing
//        O: display the top 10 users attempts
//        C: after 10 drop previous history
//        E: duplicate recorded scores 
//     */

//     let score = 0;

// }

// function replay(){

//     console.log('I\'m here!');
//     str = '';
//     let str1 = str.toUpperCase("Y");
//     let str2 = str.toUpperCase("N");
//     let replay = prompt(`${userName}, do you want to guess again (Y/N)?`)

//     if(replay === str1){
//         console.log('Let\'s try this again');
//         location.reload();
//     }
// }


//testSite();
init();


    let RandNum = Math.floor(Math.random() * 100) +1;

const guesses = document.querySelector(".guesses");

const lastResult  = document.querySelector(".lastResult");

const lowOrHi = document.querySelector(".lowOrHi");


const guessSubmit = document.querySelector(".guessSubmit");

const guessField = document.querySelector(".guessField");

let guesscount = 1;

    let resetButton;

function Checkguess(){
    const UserGuess = Number(guessField.value);

    if(guesscount === 1){
        guesses.textContent = 'Previous guesses:';
    }
    guesses.textContent += `${UserGuess}`;
    if(UserGuess === RandNum){
        lastResult.textContent = 'Congradulations You Have Won the Game';
        lastResult.style.backgroundcolor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }else if(guesscount === 10){
        lastResult.textContent = 'GAME OVER!!!'
        lowOrHi.textContent = '';
        setGameOver();
    }
    else{
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundcolor = 'red';
    if(UserGuess < RandNum)
    {
        lowOrHi.textContent = 'Last Guess Too Low';
    }
    else if(UserGuess > RandNum){
        lowOrHi.textContent = 'Last Guess Too High';
    }

    }
}








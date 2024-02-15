// function play(){
//     // step-1: hide the home screen . to hide the screen add the class hidden to the hoome screen.
//     const homeScreen = document.getElementById("home-screen");
//     homeScreen.classList.add("hidden");
//     // console.log(homeScreen)

//     // step-2: show the playground
//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove("hidden");
//     // console.log(playGround.classList)
// }


// Uporer kajtai onno vabe korlam. nicher ai function theke perameter a element er id pathia dia call kortesi. ar playground file a function a kajta kortesi.

function continueGame() {
    const randomLetter = alphabetGenarete()

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabet = document.getElementById("currentAlphabet");
    currentAlphabet.innerText = randomLetter.toUpperCase();

    // set background colot in alphabet
    alphabetBackground(randomLetter)
}



function play() {
    hideElement("home-screen")
    hideElement("score-section")

    showElement("play-ground");

    setTextElementValueById("currentLife", 5);
    setTextElementValueById("currentScore", 0);

    

    continueGame();


}


function handleKeyBoardButtonPrees(event) {
    const playerPressed = event.key;
    console.log("player press korisa", playerPressed);

    //  if player pressed Esc key. tahole gamo over kore daw.
    if(playerPressed === "Escape"){
        gameOver();
    }

    // get the expected to prees 
    const currentAlphabet = document.getElementById("currentAlphabet").innerText.toLowerCase();
    console.log("randomly othisa ", currentAlphabet);

    // checked matched or not 
    if (playerPressed === currentAlphabet) {
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  aivabe korlew hobe ,,, but niche function er maddhome akto easy way te kora hoiese.

        // // update score 
        // // 1. get the current score 
        // const currentScore = document.getElementById("currentScore");
        // const currentScoreText = currentScore.innerText;
        // let currentScoreNumber = parseInt(currentScoreText);

        // // 2. increase the score by 1
        // const newScore = currentScoreNumber + 1;
        // console.log(newScore)

        // // show the update score
        // currentScore.innerText = newScore;

        // // start a new round
        // continueGame();
        // alphabetBackgroundremove(currentAlphabet)

        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


        const elementNumber = getTextElementValueById("currentScore");
        
        const newValue = elementNumber + 1 ;

        setTextElementValueById("currentScore", newValue)


        // start a new round
        continueGame();
        alphabetBackgroundremove(currentAlphabet)

    }
    else {
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  aivabe korlew hobe ,,, but niche function er maddhome akto easy way te kora hoiese.
        //     // step -1:  get current life number
        //     const currentLife = document.getElementById("currentLife");
        //     const currentLifeText = currentLife.innerText;
        //     const currentLifeNumber = parseInt(currentLifeText);

        //     // step -2: reduce the life count
        //    const newLife = currentLifeNumber -1;

        //     // step -3: display the update life count
        //     currentLife.innerText = newLife;
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


        const currentLife = getTextElementValueById("currentLife");
        
        const newValue = currentLife - 1;

        setTextElementValueById("currentLife", newValue);

        if(newValue === 0){
            gameOver()
           
        }

    }
}
document.addEventListener("keyup", handleKeyBoardButtonPrees);

function gameOver(){
    hideElement("play-ground");
    showElement("score-section");

    // remove background previous alphabet.
    const currentAlphabet = document.getElementById("currentAlphabet").innerText;
    alphabetBackgroundremove(currentAlphabet.toLowerCase());

    // set final score
   const finalScore= getTextElementValueById("currentScore");
    setTextElementValueById("final-score", finalScore )

}
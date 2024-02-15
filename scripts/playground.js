function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden")
}

function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden")
}


function alphabetGenarete(){
    // get or create an alphabet array
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const alphabetsArr = alphabets.split("");
    // console.log(alphabetsArr.length)

    // get a random index between 0-25 
    const randomNum = Math.random() * 25
    const randomIndex = Math.round(randomNum)
    
    const randomAlphabet = alphabetsArr[randomIndex];
    return randomAlphabet

}

function alphabetBackground (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function alphabetBackgroundremove (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

// life and score update section
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNumber = parseInt(elementText);
    return elementNumber;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
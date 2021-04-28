const slider = document.getElementById("myRange"),
 resultContainer = document.querySelector(".resultContainer"),
 startBtn = document.querySelector(".startBtn"),
 usrChoice = document.querySelector(".usrChoice"),
 startList = startBtn.classList,
 sliderClass = slider.classList,
 winLose = document.querySelector(".winLose");

 const usrGuess = document.querySelector(".usrGuess");
let target = -1,
    playNum = -1 ;
 
const SHOWING = "showing",
 HIDE = "hide"


function setTarget() {
    const randNum = Math.floor(Math.random() * parseInt(slider.value));
    target = randNum + 1;
        
}

function startPlay() {
    const maxVal = parseInt(slider.value);

    if ((maxVal) > 10 ){
    setTarget();
    play();
    }
    else{
        resultContainer.innerHTML = `Isn't it too easy?`
    }
}
function setRangeMsg() {
    maxNum = parseInt(slider.value);
    resultContainer.innerHTML = `Choose between 0 and ${maxNum} `;
}


function handleSubmit() {
    if (usrGuess.value.length !== 0){
    const currentValue = parseInt(usrGuess.value);
      startPlay();
    }
}

function play() {
    const usrNum = parseInt(usrGuess.value);
    winLose.classList.remove(HIDE);
    usrChoice.innerHTML = `Your number: ${usrNum}, Machine chose: ${target}`;
    if (usrNum !== target){
        winLose.innerHTML= "You LOST!";
    
        setRangeMsg();
    }
    
    else{
        winLose.innerHTML= "You got it!";
    }
    
}

function sliderMove() {
    setRangeMsg();
    startList.remove(HIDE);
    startList.add(SHOWING);
    usrChoice.classList.remove(HIDE);
    
}


function init() {
    slider.addEventListener("input", sliderMove );
    startBtn.addEventListener("click", handleSubmit);
    usrGuess.addEventListener("submit", handleSubmit);
}

init();
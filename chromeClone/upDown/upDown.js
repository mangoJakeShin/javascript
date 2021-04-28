const slider = document.getElementById("myRange"),
 resultContainer = document.querySelector(".resultContainer"),
 startBtn = document.querySelector(".startBtn"),
 playBtn = document.querySelector(".playBtn"),
 resetBtn = document.querySelector(".resetBtn"),
 usrChoice = document.querySelector(".usrChoice"),
 startList = startBtn.classList,
 playList = playBtn.classList,
 resetList = resetBtn.classList,
 output = document.querySelector(".curValue"), 
 startMsg = usrChoice.innerHTML,
 orgMsg = "Choose the Max number",
 sliderClass = slider.classList;
 
let gameStart = true,
  target = -1;
 
const SHOWING = "showing",
 HIDE = "hide"


function setTarget() {
    const randNum = Math.floor(Math.random() * parseInt(slider.value));

    if (gameStart){
        console.log("checking")
        target = -1;
}
    else{
        
        console.log("else")
        target = randNum + 1;
        
    }
    console.log(target);
}

function startPlay() {
    const maxVal = parseInt(slider.value);

    if ((maxVal) > 10 ){
    changeMax(slider.value);
    setRangeMsg();
    gameStart = false;
    setTarget();
    startList.remove(SHOWING);
    startList.add(HIDE);
    playList.remove(HIDE);
    playList.add(SHOWING);
    resetList.remove(HIDE);
    resetList.add(SHOWING);
    changeSlide();
    displayValue();
    }
    else{
        resultContainer.innerHTML = `Isn't it too easy?`
    }
}
function changeSlide() {
    const maxVal = parseInt(slider.max);
    const minVal = parseInt(slider.min);
    const midVal = parseInt((maxVal + minVal)/2);
    slider.value = midVal;
    
}
function reset() {
    resultContainer.innerHTML= orgMsg;
    usrChoice.innerHTML = startMsg;
    
    displayValue();
    gameStart = true;
    changeMin(0);
    changeMax(150);
    changeSlide();
    setTarget();
    startList.remove(SHOWING);
    startList.add(HIDE);
    playList.remove(SHOWING);
    playList.add(HIDE);
    resetList.remove(SHOWING);
    resetList.add(HIDE);
    sliderClass.remove(HIDE);
    resultContainer.classList.remove(HIDE);
    output.classList.add(HIDE);
    usrChoice.classList.add(HIDE);
}
function setRangeMsg(text) {
    minNum = parseInt(slider.min);
    maxNum = parseInt(slider.max);
    resultContainer.innerHTML = `${gameStart ? "" : text } ${minNum === maxNum? "" : `Choose between ${minNum} and ${maxNum}` }`
}

function bingo() {
    playList.remove(SHOWING);
    playList.add(HIDE);
    sliderClass.add(HIDE);
    // resultContainer.classList.add(HIDE);
    // output.classList.add(HIDE);


}
function play() {
    const usrNum = slider.value;
    usrChoice.innerHTML = "You just chose"
    if (usrNum < target){
        changeMin(usrNum);
        
        setRangeMsg("UP!");
        output.innerHTML = usrNum;
        changeSlide();
    }
    else if (usrNum > target){
        changeMax(usrNum);
        setRangeMsg("DOWN!");
        output.innerHTML = usrNum;
        changeSlide();
    }
    else{
        resultContainer.innerHTML= "You got it!";
        usrChoice.innerHTML = "The answer was"
        output.innerHTML = usrNum;
        bingo();
    }
    
}
function changeMin(number) {
    number = parseInt(number);
    slider.min = number;

}

function changeMax(number) {
    number = parseInt(number);
    slider.max= number;
}

function displayValue() {
    output.innerHTML = slider.value;
      
}

// Update the current slider value (each time you drag the slider handle)
function sliderMove() {
    usrChoice.innerHTML = startMsg;
    displayValue();
  if (gameStart){
    startList.remove(HIDE);
    startList.add(SHOWING);
    output.classList.remove(HIDE);
    usrChoice.classList.remove(HIDE);
    
  }
}


function init() {
    console.log(startMsg)
    reset();
    slider.addEventListener("input", sliderMove );
    startBtn.addEventListener("click", startPlay);
    resetBtn.addEventListener("click", reset);
    playBtn.addEventListener("click", play)

}

init();
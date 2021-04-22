const OVER_SIZED = "overSized";
const MID_SIZED = "midSized";

const firstBorder = screen.width * ( 2 / 3);
const secBorder = firstBorder/2;
function handleClick() {
    const windowSize = window.innerWidth;
    const bodyClass = document.body.classList;
    const currentClass = bodyClass[0];
    if(windowSize>firstBorder && 
        currentClass !== OVER_SIZED)
        {
        bodyClass.remove(currentClass);
        bodyClass.add(OVER_SIZED);
        console.log("if state")
    }
    else if((windowSize < firstBorder && 
        windowSize > secBorder) && 
        currentClass !== MID_SIZED)
    {
        bodyClass.remove(currentClass);
        bodyClass.add(MID_SIZED);
        console.log("first el")
    }
    else if(windowSize < secBorder && currentClass != null)
    {
        bodyClass.remove(currentClass);
        console.log("sec el")
    }
    console.log(windowSize)
}

function init() {
    handleClick();
    window.addEventListener("resize", handleClick);
}
init();
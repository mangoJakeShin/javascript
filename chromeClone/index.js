const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.add(CLICKED_CLASS);
        title.innerHTML = "hi?"
        }
    else {
        title.className = "";
        title.classList.remove(CLICKED_CLASS);
        title.innerHTML = "bye?"
    }
    console.log(title.classList);
}

function init() {

    title.addEventListener("click", handleClick);
}

init();
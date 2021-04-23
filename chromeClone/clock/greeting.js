const form = document.querySelector(".js-form"), 
input = document.querySelector("input"),
greeting = document.querySelector(".js-greetings");
const SHOWING = "showing"

const USER_LS = "currentUser"

function paintGreeting(text ) {
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
    }
    else{
        console.log(currentUser);
        paintGreeting(currentUser);

    }

}
function init() {
    loadName();
}

init();
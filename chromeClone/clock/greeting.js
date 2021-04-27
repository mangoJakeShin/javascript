const USER_LS = "currentUser",
  SHOWING_CN = "showing",
  greeting = document.querySelector(".js-greetings"),
  form = document.querySelector(".js-form"),
  input = form.querySelector("input");

function paintGreeting(text) {
    
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
    
        console.log(currentUser);
    }
    else{

        paintGreeting(currentUser);
    }

}
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function init() {
    loadName();
    askForName();
}
init();
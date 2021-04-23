const clockContainer = document.querySelector(".js-clock"), 
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minute = date.getMinutes();
    const hour = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hour}:${minute}:${seconds<10? `0${seconds}`:`${seconds}`}`;
}



function init() {
    getTime();
    setInterval(getTime, 1000);
    
}

init();
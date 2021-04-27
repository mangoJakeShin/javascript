const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-pendingList"),
  finishedList = document.querySelector(".js-finishedList");

  const TODOS_LS = "toDos";
  const FIN_LS = "finDos";
  let toDos = [];
  let toFins = [];

  function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

    function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
  function saveFins() {
      localStorage.setItem(FIN_LS, JSON.stringify(toFins));
      
}
  
function deleteFin(event) {
    const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanToDos = toFins.filter(function(toFins) {
    return toFins.id !== parseInt(li.id);
  });
  toFins = cleanToDos;
  saveFins();
}

function moveToFins(event) {
  let text = event.target.parentNode.querySelector("span")
  let eventname = text.innerText
  paintFins(eventname)
  deleteToDo(event)
}
function moveToDos(event) {
  let text = event.target.parentNode.querySelector("span")
  let eventname = text.innerText
  paintToDo(eventname)
  deleteFin(event)
}
      
function paintFins(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const finBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toFins.length + 1;
    delBtn.innerText = "❌";
    finBtn.innerText = "🤔"
    delBtn.addEventListener("click", deleteFin);
    finBtn.addEventListener("click", moveToDos);
    span.innerText = `${text} `;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finBtn);
    li.id = newId;
    finishedList.appendChild(li);
    const toFinObj = {
      text: text,
      id: newId
    };
    toFins.push(toFinObj);
    saveFins();
 }


  function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const finBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    finBtn.innerText = "✔"
    delBtn.addEventListener("click", deleteToDo);
    finBtn.addEventListener("click", moveToFins);
    span.innerText = `${text} `;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
      text: text,
      id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
 }
  
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (currentValue.length !== 0) {
    
  paintToDo(currentValue);
  toDoInput.value = "";

  }
  }

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo) {
        paintToDo(toDo.text);
      });
    }
}
function loadFins() {
    const loadedFins = localStorage.getItem(FIN_LS);
    if (loadedFins !== null) {
      const parsedFins = JSON.parse(loadedFins);
      parsedFins.forEach(function(toDo) {
        paintFins(toDo.text);
      });
    }
}

function init() {
  loadToDos();
  loadFins();
  toDoForm.addEventListener("submit", handleSubmit);

}

init();
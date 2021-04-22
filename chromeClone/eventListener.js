// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const header = document.getElementsByTagName("h2");
const title = header[0];

const superEventHandler = {
  handleResize: function () {
    title.innerHTML = "You just resized";
    title.style.color = colors[0];
  },
  handleMouseEnter: function () {
    title.innerHTML = "the mouse is here";
    title.style.color = colors[1];
  },
  handleMouseLeave: function () {
    title.innerHTML = "The mouse is gone";
    title.style.color = colors[2];
  },
  handleRightClick: function () {
    title.innerHTML = "that was a right click";
    title.style.color = colors[3];
  }
};

window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);

/*
const title2 = document.getElementsByTagName("h1")
title2[0].innerHTML = "change plz"
title2[0].style.color = "white"
console.log(title2[0])*/

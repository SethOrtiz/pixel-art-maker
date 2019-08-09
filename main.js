const div = document.querySelector("div");
const wrapper = document.querySelector("#pixel-wrapper");
const col = document.querySelector("#wrapper-col");
const selection = document.querySelector("#selection");
const pixels = document.querySelectorAll(".pixel");
const paint = selection.querySelectorAll(".paint");
const colorName = document.querySelector("#color-name");
const currentColorDisplay = document.querySelector("#current-color-display");
let painting = false;

document.addEventListener("DOMContentLoaded", function() {
  paint.forEach(function(el) {
    el.style.background = `${el.id}`;
  });

  wrapper.addEventListener("mousedown", e => {
    painting = true;
  });

  wrapper.addEventListener("mouseup", e => {
    painting = false;
  });

  selection.addEventListener("click", e => {
    if (e.target.id !== selection) {
      let target = e.target;
      let brushColor = `${target.id}`;
      if (brushColor !== "selection") {
        currentColorDisplay.style.background = brushColor;
        colorName.innerHTML =
          brushColor.charAt(0).toUpperCase() +
          brushColor.substring(1).replace(/([A-Z])/g, " $1");
      }
      wrapper.addEventListener("mouseover", e => {
        let target = e.target;
        if (target !== wrapper) {
          if (!painting) {
            brushColor = "target.style.backgroundColor";
          } else if (painting) {
            brushColor = currentColorDisplay.style.background;
          }
          target.style.background = brushColor;
        }
      });
      wrapper.addEventListener("click", e => {
        let target = e.target;
        if (target !== wrapper) {
        brushColor = currentColorDisplay.style.background;
        target.style.background = brushColor;
        }
      });
    }
  });
});

let div = document.querySelector("div");
let wrapper = document.querySelector("#pixel-wrapper");
let selection = document.querySelector("#selection");
let pixels = document.querySelectorAll(".pixel");
let paint = selection.querySelectorAll(".paint");
let colorName = document.querySelector("#color-name");
let colorBox = document.querySelector("#box");

document.addEventListener("DOMContentLoaded", function() {
  paint.forEach(function(el) {
    el.style.background = `${el.id}`;
  });

  selection.addEventListener("click", function(e) {
    if (e.target.id !== selection) {
      let target = e.target;
      let brushColor = `${target.id}`;
      if (brushColor !== "selection") {
        colorBox.style.background = brushColor;
        colorName.innerHTML =
          brushColor.charAt(0).toUpperCase() +
          brushColor.substring(1).replace(/([A-Z])/g, " $1");
      }
      wrapper.addEventListener("mousedown", function(e) {
        wrapper.addEventListener("mouseover", function(e) {
          let target = e.target;
          if (target !== wrapper) {
            target.style.background = brushColor;
          }
          wrapper.addEventListener("mouseup", function(e) {
            brushColor = 'target.style.backgroundColor';
            wrapper.addEventListener("mousedown", function(e) {
              brushColor = colorBox.style.background;
            })
        });
        });
      });
    }
  });
});

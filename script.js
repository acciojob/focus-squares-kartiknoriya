document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".square");

  const HOVER_COLOR = "#6F4E37";
  const DEFAULT_COLOR = "#E6E6FA";

  boxes.forEach(function (box) {
    box.addEventListener("mouseover", function () {
      boxes.forEach(function (b) {
        if (b !== box) {
          b.style.backgroundColor = HOVER_COLOR;
        }
      });
    });

    box.addEventListener("mouseout", function () {
      boxes.forEach(function (b) {
        if (b !== box) {
          b.style.backgroundColor = DEFAULT_COLOR;
        }
      });
    });
  });
});

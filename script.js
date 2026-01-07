const boxes = document.querySelectorAll('.square');

const HOVER_COLOR = '#6F4E37';
const DEFAULT_COLOR = '#E6E6FA';

boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    boxes.forEach(b => {
      if (b !== box) {
        b.style.backgroundColor = HOVER_COLOR;
      }
    });
  });

  box.addEventListener('mouseout', () => {
    boxes.forEach(b => {
      if (b !== box) {
        b.style.backgroundColor = DEFAULT_COLOR;
      }
    });
  });
});

});
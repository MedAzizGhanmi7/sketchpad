const container = document.querySelector('.container');
const change = document.querySelector('#change');
let side = 16; // Default number of squares per side
let grid;

newGrid();
setGrid(calculate(side));

function removeOldGrid() {
  const rmv = document.querySelectorAll('.divSquare');
  rmv.forEach((item) => {
    item.remove();
  });
}

function newGrid() {
  for (let i = 0; i < side * side; i++) {
    const divx = document.createElement('div');
    container.appendChild(divx);
    divx.classList.add('divSquare');

    divx.addEventListener('mouseover', () => {
      divx.classList.add('hovered');
    });
  }
}

change.addEventListener('click', () => {
  let promptVal = Number(prompt('Enter the number of squares per side (MAX 100)', side));
  if (promptVal > 0 && promptVal <= 100) {
    removeOldGrid();
    side = promptVal;
    newGrid();
    grid = calculate(side);
    setGrid(grid);
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});

function calculate(num) {
  const w = 800;
  return w / num;
}

function setGrid(grid) {
  const grids = document.querySelectorAll('.divSquare');
  grids.forEach((gr) => {
    gr.style.height = grid + 'px';
    gr.style.width = grid + 'px';
  });
}

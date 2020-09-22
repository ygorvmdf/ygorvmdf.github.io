function selectingColor(event) {
  if (event.target.className.match(/selected/g)) {
    return;
  }
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintingPixel(event) {
  if (event.target.classList.length > 1) {
    event.target.classList.remove(event.target.classList[1]);
  }
  const selectedColor = document.querySelector('.selected').classList[1];
  event.target.classList.add(selectedColor);
}

function clearColors() {
  const pixelList = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelList.length; i += 1) {
    const currentColor = pixelList[i].classList[1];
    pixelList[i].classList.remove(currentColor);
    pixelList[i].classList.add('white');
  }
}

function setDefaultValues(value) {
  if (value < 5) {
    value = 5;
  } else if (value > 50) {
    value = 50;
  }
  return value;
}

function removeColor(event) {
  console.log('alou');
  event.target.classList[1] = "no-color"
}

function construcGridDivs(gridSize) {
  const pixelsBoard = document.getElementById('pixels-container');
  const newDivGrid = document.createElement('div');
  newDivGrid.id = 'new-grid';
  newDivGrid.className = 'new-grid';
  for (let i = 0; i < gridSize; i += 1) {
    const rowDiv = document.createElement('div');
    newDivGrid.appendChild(rowDiv);
    rowDiv.className = 'div-row';
    for (let j = 0; j < gridSize; j += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.classList.add('white');
      rowDiv.appendChild(newPixel);
      newPixel.addEventListener('click', paintingPixel);
      newPixel,addEventListener('dbclick', removeColor);
    }
  }
  pixelsBoard.appendChild(newDivGrid);
}

function generateGrid() {
  let gridSize = document.getElementById('board-size').value;
  const pixelBoard = document.getElementById('pixels-container');
  if (gridSize === '') {
    alert('Board inválido!');
  } else {
    if (pixelBoard.innerHTML !== '') {
      const divToRemove = document.getElementsByClassName('new-grid')[0];
      pixelBoard.removeChild(divToRemove);
    }
    gridSize = setDefaultValues(gridSize);
    construcGridDivs(gridSize);
  }
}

function addRandomClass() {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  document.getElementById('first-selected').classList.add('selected');
  const classColorList = ['red', 'blue', 'green', 'grey', 'yellow', 'purple', 'brown', 'pink', 'lightblue', 'lightgreen', 'maroon', 'salmon', 'orange'];
  const palletList = document.getElementsByClassName('color');
  for (let i = 3; i < palletList.length; i += 1) {
    const chosenColor = classColorList[Math.floor(Math.random() * (palletList.length))];
    const index = classColorList.indexOf(chosenColor);
    classColorList.splice(index, 1);
    const palletClassList = palletList[i].className.split(' ');
    palletList[i].classList.remove(palletClassList[1]);
    palletList[i].classList.add(chosenColor);
  }
}

const colorPixelList = document.getElementsByClassName('color');
for (let i = 0; i < colorPixelList.length; i += 1) {
  colorPixelList[i].addEventListener('click', selectingColor);
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearColors);
const generateGridButton = document.getElementById('generate-board');
generateGridButton.addEventListener('click', generateGrid);


const changeColorsButton = document.getElementById('change-colors');
changeColorsButton.addEventListener('click', addRandomClass);

addRandomClass();
generateGrid();

const inputImage = document.getElementById('background-image');
inputImage.addEventListener('change', function() {
  const output = document.getElementById('new-grid');
  output.style.backgroundImage = `url(${window.URL.createObjectURL(this.files[0])})`;
  output.classList.add('board-image');
})

document.getElementById('clear-photo').addEventListener('click', function() {
  const output = document.getElementById('new-grid');
  output.classList.remove('board-image');
  output.style.backgroundImage = '';
})

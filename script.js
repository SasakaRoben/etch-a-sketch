const body = document.querySelector('body');
const btn = document.createElement('button');
btn.textContent = "Click Me!!";
body.appendChild(btn);
btn.addEventListener("click", () => {
    let userInput = prompt("Enter the number of squares per side for the new grid (Max is 100)");
    let number = parseInt(userInput);
    createGrid(number);
});

const container = document.querySelector(".grid-container");
function createGrid(size)
{
    container.replaceChildren(); //clear the existing grid

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add('grid-square');
        container.appendChild(square);
    }
}

createGrid(16);

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-square')) {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        event.target.style.backgroundColor = randomColor;
    }
});

container.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('grid-square')) {
        event.target.style.backgroundColor = 'white';
    }
});



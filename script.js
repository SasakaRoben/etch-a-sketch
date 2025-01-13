const container = document.querySelector(".grid-container");

for (let i = 0; i < 16 * 16; i++) 
{
    const square = document.createElement("div");
    square.classList.add('grid-square');
    container.appendChild(square);
}

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-square')) {
        event.target.style.backgroundColor = 'yellow';
    }
});

container.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('grid-square')) {
        event.target.style.backgroundColor = 'white';
    }
});




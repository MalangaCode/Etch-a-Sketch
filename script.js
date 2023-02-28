makeNDivs(16);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
    makeNDivs(`${button.id}`);
    });
});


function makeNDivs(n) {
    removeCanvas();
    createCanvas(n);

    for (let i = 0; i < n**2; i++) {
        const container = document.querySelector('#canvas');
        const createDiv = document.createElement('div'); 

        createDiv.classList.add('pixel');
        container.appendChild(createDiv);  
    }
}

function createCanvas(n) {

    const container = document.querySelector('#sketchPad');
    const createDiv = document.createElement('div'); 
    createDiv.setAttribute('id', 'canvas');
    container.appendChild(createDiv); 

    canvas.style.cssText = 
    `grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr);`
}

function removeCanvas() {
    const element = document.getElementById("canvas");
    element.remove();
}



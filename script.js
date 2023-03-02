makeNDivs(16);

// canvas size buttons //

const buttons = document.getElementById('canvasButtons').childNodes;

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
        makeNDivs(`${button.id}`);
        });
    });

// draw() function let you draw using black and white pixels //    

function draw() {
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        let i = 9;
        pixel.addEventListener('mouseenter', () => {
        pixel.setAttribute(`style`, `background-color: hsl(0, 0%, ${i}0%);`);
        i--;        
        });
    });
}

// this option let you choose a color to draw //

const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', () => {

    let myColor = document.getElementById('colorPicker').value;
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
        pixel.setAttribute(`style`, `background-color: ${myColor}`);       
        });
    });
}
);

// this option let you draw using black and white pixels //

const bwButton = document.getElementById('bwButton');
bwButton.addEventListener('click', draw);

// this option let you erase using white pixels //

const eraser = document.getElementById('eraser');
eraser.addEventListener('click', erase);

function erase() {
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
        pixel.setAttribute(`style`, `background-color: #F8F8F8`);       
        });
    });
}

// this function creates a grid of the desired amount of div containers //

function makeNDivs(n) {
    removeCanvas();
    createCanvas(n);
   
    for (let i = 0; i < n**2; i++) {
        const container = document.querySelector('#canvas');
        const createDiv = document.createElement('div'); 

        createDiv.classList.add('pixel');
        container.appendChild(createDiv);  
    };
    draw();
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



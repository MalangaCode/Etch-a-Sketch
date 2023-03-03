makeNDivs(16);

// pixel size buttons //

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

// Color picker //

const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', () => {

    let myColor = document.getElementById('colorPicker').value;
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
        pixel.setAttribute(`style`, `background-color: ${myColor}`);       
        });
    });
});

// Grid switch //

const gridSwitch = document.getElementById('gridSwitch');
gridSwitch.addEventListener('change', () => {
    
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.classList.toggle(`noBorder`); 

    });
});

// Grey scale //

const bwButton = document.getElementById('bwButton');
bwButton.addEventListener('click', draw);

// Eraser //

const eraser = document.getElementById('eraser');
eraser.addEventListener('click', erase);

function erase() {
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
        pixel.setAttribute(`style`, `background-color: #F4F1DE`);       
        });
    });
}

// Pixel grid//

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



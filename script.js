makeNDivs(16);

// canvas size buttons //
const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
        makeNDivs(`${button.id}`);
        });
    });

    
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



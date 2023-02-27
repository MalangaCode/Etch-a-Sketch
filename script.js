function makeNDivs(n) {
    
    for (let i = 0; i < n; i++) {
        const container = document.querySelector('#sketchPad');
        const createDiv = document.createElement('div'); 

        createDiv.classList.add('pixel');
        container.appendChild(createDiv);  
    }
}
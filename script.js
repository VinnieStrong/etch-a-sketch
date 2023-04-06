let container = document.querySelector('.container');

function createGrid() {
    let side=20;
    let containerWidth = container.offsetWidth;
    let squareSize = containerWidth/side; 
    container.style.height = `${containerWidth}px`;
    
    for(let i=0; i<(side*side); i++) {
        let square = document.createElement('div');
        square.classList.add('grid');
        square.setAttribute('style',`width:${squareSize}px;`
        + `height:${squareSize}px;  border : 1px solid black;`
        + 'box-sizing: border-box; display: flex;'
        + `justify-content:center;align-items:center;`);
        container.appendChild(square);
        square.addEventListener('mousemove', () => { 
        square.style.backgroundColor = 'red';
        })
    }
}
createGrid();

function sizeGrid() {

    let value = 20;
    
    let domanda = document.querySelector('.prompt');
    domanda.addEventListener('click', () => {
    let input =  prompt('How many square per side do'
    +'you want?')
    value = parseInt(input) || value;
    });
}

function colorGrid() {
    square.addEventListener('mousemove', () => { 
    square.style.backgroundColor = 'red';
    })
}






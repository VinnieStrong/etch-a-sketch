let container = document.querySelector('.container');
let side = 20;
let domanda = document.querySelector('.prompt');
let redColor = document.querySelector('.red-color');
let eraser = document.querySelector('.eraser');
let randomColor = document.querySelector('.random-color');
let color = 'rgb(0,0,0)';



function changeColor() {

    redColor.addEventListener('click', () => {
        color = 'red';
        createGrid;
    })

    eraser.addEventListener('click', () => {
        color = 'white';
        createGrid;
    })

    randomColor.addEventListener('click', () => {
        let randomRgbValue = Math.floor(Math.random()*256);
        let randomRgbValue2 = Math.floor(Math.random()*256);
        let randomRgbValue3 = Math.floor(Math.random()*256);
        color = `rgb(${randomRgbValue},${randomRgbValue2},${randomRgbValue3})`;
        createGrid;
    })

}

function sizeGrid() {
    domanda.addEventListener('click', () => {
        let input =  prompt('How many square per side do'
        +'you want?')
        let value = parseInt(input);

        if(value > 1 && value<101) {
            side=value;
            createGrid();
        }
        else alert('please enter a number between 2 and 100');
     })
}

function createGrid() {
   
    let containerWidth = container.offsetWidth;
    let squareSize = containerWidth/side; 
    container.style.height = `${containerWidth}px`;

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    for(let i=0; i<(side*side); i++) {
        let square = document.createElement('div');
        square.classList.add('grid');
        square.setAttribute('style',`width:${squareSize}px;`
        + `height:${squareSize}px;  border : 1px solid black;`
        + 'box-sizing: border-box; display: flex;'
        + `justify-content:center;align-items:center;`);
        container.appendChild(square);
        square.addEventListener('mousemove', () => { 
        square.style.backgroundColor = color;
        })
    }    
}

createGrid();
sizeGrid();
changeColor();







let container = document.querySelector('.container');

function createGrid() {
    let side=50;
    let containerWidth = container.offsetWidth;
    let squareSize = containerWidth/side; 
    
    for(let i=0; i<(side*side); i++) {
        let square = document.createElement('div');
        square.classList.add('grid');
        square.setAttribute('style',`width:${squareSize}px;`
        + `height:${squareSize}px;  border : 1px solid black;`
        + 'box-sizing: border-box; display: flex; '
        + `flex-basis: 100/${side}%; justify-content:`
        + 'center; align-items: center;');
        container.appendChild(square);
        square.addEventListener('mousemove', () => { 
        square.style.backgroundColor = 'red';
        })
    }
}
createGrid();

function colorGrid() {
    square.addEventListener('mousemove', () => { 
    square.style.backgroundColor = 'red';
    })
}


let domanda = document.querySelector('.prompt');
domanda.addEventListener('click', () => {
    let value =  prompt('How many square per side do'
    +'you want?', 16)
});

function changeSquareNumber(value) {
    if(value<101) {
        value = side;
        createGrid();
    }

}



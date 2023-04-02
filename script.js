let container = document.querySelector('.container');

function createGrid() {
    for(let i=0; i<256; i++) {
        let square = document.createElement('div');
        square.classList.add('grid');
        square.setAttribute('style', 'width : 50px; height : 50px; border : 1px solid black; box-sizing: border-box;');
        container.appendChild(square);
    }
}
createGrid();
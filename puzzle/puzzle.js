let row = 3;
let cloum = 3;
let currTile;
let otherTile;
let turns = 0;

// let imgOrder=["1","2","3","4","5","6","7","8","9"];
let imgOrder = ["8", "4", "9", "2", "6", "7", "5", "1", "3"];


window.onload = function () {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < cloum; c++) {
            let tile = document.createElement("img") // created <img>
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./puzzleImg/" + imgOrder.shift() + ".jpg";//./puzzleImg/1.jpg

            tile.addEventListener("dragstart", dragStart)
            tile.addEventListener("dragover", dragOver)
            tile.addEventListener("dragenter", dragEnter)
            tile.addEventListener("dragleave", dragLeave)
            tile.addEventListener("drop", Drop)
            tile.addEventListener("dragend", dragEnd)

            document.getElementById("board").append(tile)
        }
    }
}

function resetPuzzle(){

    let tiles = document.querySelectorAll("#board img");

    for(let i = 0; i < tiles.length; i++){
        tiles[i].src = "./puzzleImg/" + firstOrder[i] + ".jpg";
    }

    turns = 0;
    document.getElementById("turns").innerText = turns;
}

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
}
function dragLeave() {

}
function Drop() {
    otherTile = this;
}
function dragEnd() {

    if(!otherTile.src.includes("3.jpg")){
        return;
    }

    let currcooder = currTile.id.split("-")
    let r = parseInt(currcooder[0])
    let c = parseInt(currcooder[1])

    let othercooder = otherTile.id.split("-")
    let r2 = parseInt(othercooder[0])
    let c2 = parseInt(othercooder[1])

    let movelift = r == r2 && c2 == c - 1;
    let moveright = r == r2 && c2 == c + 1;

    let moveup = c == c2 && r2 == r - 1;
    let movedown = c == c2 && r2 == r + 1;

    let Adjest = movedown || movelift || moveright || moveup;

    if (Adjest) {

        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns +=1;
        document.getElementById("turns").innerText = turns;
    }
}






























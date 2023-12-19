/**
 * @type HTMLCanvasElement
*/ 

import level from "./level.js";

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

export let currentLevel = 0;
const maxLevel = 30;
let cellSize = level[currentLevel].cellSize;

let cellCountX = level[currentLevel].cellCountX;
let cellCountY = level[currentLevel].cellCountY;

canvas.width = cellSize * cellCountX;
canvas.height = cellSize * cellCountY;

class Game {
    constructor() {
        this.cellCountX = level[currentLevel].cellCountX;
        this.cellCountY = level[currentLevel].cellCountY;
        this.cellSize = level[currentLevel].cellSize;
        this.padding = this.cellSize * .25;
        this.mat = level[currentLevel].mat;
        this.door = level[currentLevel].door;
        this.gate = level[currentLevel].gate;
        this.yesNear = false;
        this.yesGreenNear = false;
        this.yesStepOnTrap = false;
        this.degree = 0;
    }

    draw(red, blue, green) {
        this.drawBoard(red, blue, green);
    }

    update(red, blue, green) {
        this.degree = (this.degree + 1) % 360;

        if(this.isGreenNear(red, blue, green)) {
            setTimeout(() => {
                alert("Oppsssssssss");
                init();
            }, 1);
            this.yesGreenNear = false;
            red.yesGreenNear = false;
            blue.yesGreenNear = false;
            green.yesGreenNear = false;
        }
        
        if(this.isStepOnTrap(red, blue, green)) {
            setTimeout(() => {
                alert("Oppsssssssss");
                init();
            }, 1);
            this.yesStepOnTrap = false;
        }

        if(this.isNear(red, blue)) {
            this.yesNear = false;
            red.yesNear = false;
            blue.yesNear = false;
            setTimeout(() => {
                alert("Yooooooo");
                currentLevel = (currentLevel + 1) % maxLevel;
                init();
                this.nextLevel();
            }, 1);
        }

        //door Mechanism
        if(this.door.present) {
        //For single door
            if (this.mat[red.y][red.x] == 2 ||
                this.mat[blue.y][blue.x] == 2 ||
                (level[currentLevel].green.present && this.mat[green.y][green.x] == 2) ||
                red.y == this.door.one.y && red.x == this.door.one.x ||
                blue.y == this.door.one.y && blue.x == this.door.one.x ||
                (level[currentLevel].green.present && green.y == this.door.one.y && green.x == this.door.one.x)
                ) {
                    this.mat[this.door.one.y][this.door.one.x] = 0;
            } else {
                this.mat[this.door.one.y][this.door.one.x] = this.door.one.type;
            }

            //For Double door
            if(this.door.two.present) {
                if (this.mat[red.y][red.x] == 2 ||
                    this.mat[blue.y][blue.x] == 2 ||
                    (level[currentLevel].green.present && this.mat[green.y][green.x] == 2) ||
                    red.y == this.door.two.y && red.x == this.door.two.x ||
                    blue.y == this.door.two.y && blue.x == this.door.two.x ||
                    (level[currentLevel].green.present && green.y == this.door.two.y && green.x == this.door.two.x)
                    ) {
                        this.mat[this.door.two.y][this.door.two.x] = 0;
                    } else {
                        this.mat[this.door.two.y][this.door.two.x] = this.door.two.type;
                    }
                }
            }
            
            
        if(this.gate.present) {
            if (this.mat[red.y][red.x] == 3 ||
                this.mat[blue.y][blue.x] == 3 || 
                (level[currentLevel].green.present && this.mat[green.y][green.x] == 3)) {
                    for (let i = 0; i < this.gate.one.cord[0].length; i++) {
                        this.mat[this.gate.one.cord[0][i]][this.gate.one.cord[1][i]] = 0;
                        
                    }
                    for (let i = 0; i < this.gate.one.history[0].length; i++) {
                        this.mat[this.gate.one.history[0][i]][this.gate.one.history[1][i]] = 1;
                    }
            }
            if (this.gate.two.present) {
                if (this.mat[red.y][red.x] == 4 ||
                    this.mat[blue.y][blue.x] == 4 ||
                    (level[currentLevel].green.present && this.mat[green.y][green.x] == 4)) {
                        for (let i = 0; i < this.gate.two.cord[0].length; i++) {
                            this.mat[this.gate.two.cord[0][i]][this.gate.two.cord[1][i]] = 0;
                            
                        }
                        for (let i = 0; i < this.gate.two.history[0].length; i++) {
                            this.mat[this.gate.two.history[0][i]][this.gate.two.history[1][i]] = 1;
                        }
                }
            }
        }
        
    }

    drawBoard(red, blue, green) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < this.cellCountX; i++) {
            for (let j = 0; j < this.cellCountY; j++) {
                if (this.mat[j][i] == 0) {
                    this.drawCell(i, j);
                } else if (this.mat[j][i] == -1) {
                    this.drawWall(i, j);
                } else if (this.mat[j][i] == 2) {
                    if (red.x == i && red.y == j ||
                        blue.x == i && blue.y == j ||
                        green.x == i && green.y == j) {
                        this.drawBtn(i, j, "green");
                    } else {
                        this.drawBtn(i, j, "#ff5172")
                    } 
                } else if (this.mat[j][i] == -2) {
                    this.drawDoor(i, j, 0);
                } else if (this.mat[j][i] == -3) {
                    this.drawDoor(i, j, 90);
                } else if (this.mat[j][i] == 'b') {
                    this.drawBackground(i, j)
                } else if (this.mat[j][i] == 1) {
                    this.drawTrap(i, j);
                } else if (this.mat[j][i] == 3) {
                    this.drawGateBtn(i, j, this.degree, "red");
                    if(red.x == i && red.y == j) {
                        this.mat[j][i] = 0;
                    }
                    if(blue.x == i && blue.y == j) {
                        this.mat[j][i] = 0;
                    }
                    if(green.x == i && green.y == j) {
                        this.mat[j][i] = 0;
                    }
                } else if (this.mat[j][i] == 4) {
                    // this.drawGateBtn(i, j, 360 - this.degree, "skyblue");
                    this.drawGateBtn(i, j, this.degree, "skyblue");
                    if(red.x == i && red.y == j) {
                        this.mat[j][i] = 0;
                    }
                    if(blue.x == i && blue.y == j) {
                        this.mat[j][i] = 0;
                    }
                    if(green.x == i && green.y == j) {
                        this.mat[j][i] = 0;
                    }
                } else if (this.mat[j][i] == -4) {
                    this.drawGateEnd(i, j, 0, "red", "orange", "orangered");
                } else if (this.mat[j][i] == -6) {
                    this.drawGateEnd(i, j, 180, "red", "orange", "orangered");
                } else if (this.mat[j][i] == -5) {
                    this.drawGateMiddle(i, j, 0, "red", "orange", "orangered");
                } else if (this.mat[j][i] == -7) {
                    this.drawGateEnd(i, j, 270, "blue", "skyblue", "purple");
                } else if (this.mat[j][i] == -9) {
                    this.drawGateEnd(i, j, 90, "blue", "skyblue", "purple");
                } else if (this.mat[j][i] == -8) {
                    this.drawGateMiddle(i, j, 90, "blue", "skyblue", "purple");
                }
            }
        }
    }
        
    drawCell(x, y){
        ctx.lineWidth = this.padding;
        const cellX = x * this.cellSize;
        const cellY = y * this.cellSize;
        ctx.fillStyle = '#ced1d9';
        ctx.fillRect(cellX, cellY, this.cellSize, this.cellSize);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(cellX + this.padding / 2, cellY + this.padding / 2, this.cellSize - this.padding, this.cellSize - this.padding);
    }

    drawWall(x, y){
        ctx.lineWidth = this.padding;
        const cellX = x * this.cellSize;
        const cellY = y * this.cellSize;
        ctx.fillStyle = '#6d6f7f';
        ctx.fillRect(cellX, cellY, this.cellSize, this.cellSize);
        ctx.fillStyle = '#9c9fad';
        ctx.fillRect(cellX + this.padding / 2, cellY + this.padding / 2, this.cellSize - this.padding, this.cellSize - this.padding);
        ctx.lineWidth = 1;
    }

    drawBtn(x, y, color) {
        const cellX = x * this.cellSize;
        const cellY = y * this.cellSize;
        ctx.fillStyle = '#b6bbc7';
        ctx.fillRect(cellX, cellY, this.cellSize, this.cellSize);
        ctx.fillStyle = color;
        ctx.fillRect(cellX + this.padding / 4, cellY + this.padding / 4, this.cellSize - this.padding / 2, this.cellSize - this.padding / 2);
    }

    drawDoor(x, y, degree) {
        const cellX = x * this.cellSize;
        const cellY = y * this.cellSize;
        this.drawCell(x, y);

        ctx.translate(cellX + this.cellSize / 2, cellY + this.cellSize / 2);
        ctx.rotate(degree * Math.PI / 180);
        ctx.strokeStyle = '#555869';
        ctx.beginPath();
        ctx.moveTo(0, 0 - this.cellSize / 2);
        ctx.lineTo(0, 0 + this.cellSize / 2);

        ctx.moveTo(0 -  this.cellSize * .25, 0);
        ctx.lineTo(0 + this.cellSize * .25, 0);
        
        ctx.closePath();
        ctx.stroke();
        ctx.strokeStyle = '#6f7283';
        ctx.beginPath();
        ctx.moveTo(0, 0 - this.cellSize / 2 + this.padding / 2);
        ctx.lineTo(0, 0 + this.cellSize / 2 - this.padding / 2);
        ctx.closePath();
        ctx.stroke();

        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    drawBackground(x, y) {
        const cellX = x * this.cellSize;
        const cellY = y * this.cellSize;
        ctx.fillStyle = '#606172';
        ctx.fillRect(cellX, cellY, this.cellSize, this.cellSize);
    }

    drawTrap(x, y) {
        const cellX = x * this.cellSize;
        const cellY = y * this.cellSize;
        ctx.fillStyle = '#ced1d9';
        ctx.fillRect(cellX, cellY, this.cellSize, this.cellSize);
        ctx.fillStyle = '#ce3d56';
        ctx.fillRect(cellX + this.padding / 2, cellY + this.padding / 2, this.cellSize - this.padding, this.cellSize - this.padding);
        ctx.lineWidth = this.padding / 2;
        ctx.strokeStyle = '#ff5273';
        ctx.strokeRect(cellX + this.padding * 1.25, cellY + this.padding * 1.25, this.cellSize - this.padding * 2.5, this.cellSize - this.padding * 2.5);
    }

    drawGateBtn(x, y, degree, color) {
        const cellX = x * this.cellSize;
        const cellY = y * this.cellSize;

        this.drawCell(x, y);

        ctx.save();
        ctx.translate(cellX + this.cellSize / 2, cellY + this.cellSize / 2);
        ctx.rotate(degree * Math.PI / 180);

        // ctx.strokeStyle = '#ff4473';
        ctx.strokeStyle = color;
        ctx.lineWidth = this.padding / 2
        ctx.strokeRect(0 - this.cellSize * .5 + this.padding * 1.25, 0 - this.cellSize * .5 + this.padding * 1.25, this.cellSize - this.padding * 2.5, this.cellSize - this.padding * 2.5);

        ctx.restore();
    }

    drawGateEnd(x, y, degree, color1, color2, color3) {
        const cellX = x * this.cellSize;
        const cellY = y * this.cellSize;

        ctx.save();
        ctx.translate(cellX + this.cellSize / 2, cellY + this.cellSize / 2);
        ctx.rotate(degree * Math.PI / 180);

        // ctx.fillStyle = '#ce3b56';
        ctx.fillStyle = color1;
        ctx.fillRect(0 - this.cellSize * .5, 0 - this.cellSize * .5, this.cellSize, this.cellSize);
        
        // ctx.fillStyle = '#ffaaaa';
        ctx.fillStyle = color2;
        ctx.fillRect(0 - this.cellSize * .5 + this.padding * .5, 0 - this.cellSize * .5 + this.padding * .5, this.cellSize - this.padding, this.cellSize - this.padding * .5);
        
        // ctx.fillStyle = '#ff5273';
        ctx.fillStyle = color3;
        ctx.fillRect(0 - this.cellSize * .5 + this.padding, 0 - this.cellSize * .5 + this.padding, this.cellSize - this.padding * 2, this.cellSize - this.padding);

        ctx.restore();
    }

    drawGateMiddle(x, y, degree, color1, color2, color3) {
        const cellX = x * this.cellSize;
        const cellY = y * this.cellSize;

        ctx.save();
        ctx.translate(cellX + this.cellSize / 2, cellY + this.cellSize / 2);
        ctx.rotate(degree * Math.PI / 180);

        // ctx.fillStyle = '#ce3b56';
        ctx.fillStyle = color1;
        ctx.fillRect(0 - this.cellSize * .5, 0 - this.cellSize * .5, this.cellSize, this.cellSize);
        
        // ctx.fillStyle = '#ffaaaa';
        ctx.fillStyle = color2;
        ctx.fillRect(0 - this.cellSize * .5 + this.padding * .5, 0 - this.cellSize * .5, this.cellSize - this.padding, this.cellSize);
        
        // ctx.fillStyle = '#ff5273';
        ctx.fillStyle = color3;
        ctx.fillRect(0 - this.cellSize * .5 + this.padding, 0 - this.cellSize * .5, this.cellSize - this.padding * 2, this.cellSize);

        ctx.restore();
    }
    
    isNear(red, blue) {
        if(red.x == blue.x && red.y + 1 == blue.y ||
            red.x + 1 == blue.x && red.y == blue.y ||
            red.x == blue.x && red.y - 1 == blue.y ||
            red.x - 1 == blue.x && red.y == blue.y ) {
            this.yesNear = true;
            red.yesNear = true;
            blue.yesNear = true;
        }
        return this.yesNear;
    }

    isGreenNear(red, blue, green) {
        if(red.x == green.x && red.y + 1 == green.y ||
            red.x + 1 == green.x && red.y == green.y ||
            red.x == green.x && red.y - 1 == green.y ||
            red.x - 1 == green.x && red.y == green.y ) {
            this.yesGreenNear = true;
            red.yesGreenNear = true;
            green.yesGreenNear = true;
        }
        if(green.x == blue.x && green.y + 1 == blue.y ||
            green.x + 1 == blue.x && green.y == blue.y ||
            green.x == blue.x && green.y - 1 == blue.y ||
            green.x - 1 == blue.x && green.y == blue.y ) {
            this.yesGreenNear = true;
            green.yesGreenNear = true;
            blue.yesGreenNear = true;
        }
        return this.yesGreenNear;
    }

    isStepOnTrap(red, blue, green) {
        if (this.mat[red.y][red.x] == 1 ||
            this.mat[blue.y][blue.x] == 1 
            ) {
                this.yesStepOnTrap = true;
        }

        if(level[currentLevel].green.present) {
            if (this.mat[green.y][green.x] == 1 ) {
                this.yesStepOnTrap = true;
            }
        }
        return this.yesStepOnTrap;
    }
    nextLevel(){
        cellSize = level[currentLevel].cellSize;
        cellCountX = level[currentLevel].cellCountX;
        cellCountY = level[currentLevel].cellCountY;

        canvas.width = cellSize * cellCountX;
        canvas.height = cellSize * cellCountY;
    }
}

class Player extends Game{
    constructor(borderColor, cellColor){
        super();
        this.x;
        this.y;
        this.borderColor = borderColor;
        this.cellColor = cellColor;
    }
    
    draw(){
        ctx.fillStyle = this.borderColor;
        ctx.fillRect(this.x * this.cellSize + this.padding / 2, this.y * this.cellSize + this.padding / 2, this.cellSize - this.padding, this.cellSize - this.padding);
        ctx.fillStyle = this.cellColor;
        ctx.fillRect(this.x * this.cellSize + this.padding, this.y * this.cellSize + this.padding, this.cellSize - this.padding * 2, this.cellSize - this.padding * 2);
    }
    
    update(){
         

    }
    
    moveDown(){
        if (this.mat[this.y + 1][this.x] < 0 || this.yesNear){
            return;
        }
        this.y += 1;
    }
    
    moveUp(){
        if (this.mat[this.y - 1][this.x] < 0 || this.yesNear){
            return;
        }
        this.y -= 1;
    }
    
    moveLeft(){
        if (this.mat[this.y][this.x - 1] < 0 || this.yesNear){
            return;
        }
        this.x -= 1;
    }
    
    moveRight(){
        if (this.mat[this.y][this.x + 1] < 0 || this.yesNear){
            return;
        }
        this.x += 1;
    }
}

let game = new Game();
let red = new Player("#ff5172", "#ffa8a8");
let blue = new Player("#0099ff", "#00ccff");
let green = new Player("#47cf54", "#c1ff75");



export function init(){
    game = new Game();
    red = new Player("#ff5172", "#ffa8a8");
    blue = new Player("#0099ff", "#00ccff");
    green = new Player("#47cf54", "#c1ff75");
    red.x = level[currentLevel].red.x;
    red.y = level[currentLevel].red.y;
    blue.x = level[currentLevel].blue.x;
    blue.y = level[currentLevel].blue.y;
    if(level[currentLevel].green.present) {
        green.x = level[currentLevel].green.x;
        green.y = level[currentLevel].green.y;
    }
    if(level[currentLevel].gate.present) {
        for(let i = 0; i < level[currentLevel].gate.one.cord[0].length; i++) {
            if(level[currentLevel].gate.one.type == "ver") {
                if(i == 0) {
                    level[currentLevel].mat[level[currentLevel].gate.one.cord[0][i]][level[currentLevel].gate.one.cord[1][i]] = -4;
                    continue;
                }
                if(i == level[currentLevel].gate.one.cord[0].length - 1) {
                    level[currentLevel].mat[level[currentLevel].gate.one.cord[0][i]][level[currentLevel].gate.one.cord[1][i]] = -6;
                    continue;
                }
                level[currentLevel].mat[level[currentLevel].gate.one.cord[0][i]][level[currentLevel].gate.one.cord[1][i]] = -5;
            }
        }
        level[currentLevel].mat[level[currentLevel].gate.one.btn.y][level[currentLevel].gate.one.btn.x] = 3;
        
        if(level[currentLevel].gate.two.present) {
            for(let i = 0; i < level[currentLevel].gate.two.cord[0].length; i++) {
                if(level[currentLevel].gate.two.type == "hor") {
                    if(i == 0) {
                        level[currentLevel].mat[level[currentLevel].gate.two.cord[0][i]][level[currentLevel].gate.two.cord[1][i]] = -7;
                        continue;
                    }
                    if(i == level[currentLevel].gate.two.cord[0].length - 1) {
                        level[currentLevel].mat[level[currentLevel].gate.two.cord[0][i]][level[currentLevel].gate.two.cord[1][i]] = -9;
                        continue;
                    }
                    level[currentLevel].mat[level[currentLevel].gate.two.cord[0][i]][level[currentLevel].gate.two.cord[1][i]] = -8;
                }
            }
            level[currentLevel].mat[level[currentLevel].gate.two.btn.y][level[currentLevel].gate.two.btn.x] = 4;
        }
    }
}
init();

function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.update(red, blue, green);
    game.draw(red, blue, green);

    red.update();
    red.draw();

    blue.update();
    blue.draw();

    if(level[currentLevel].green.present) {
        green.update();
        green.draw();
    }

    requestAnimationFrame(gameLoop);
}

let nextMove = true;
function handleKeyDown(e){
    if(!nextMove) return;
    nextMove = false;
    if (e.key == "ArrowDown") {
        red.moveDown();
        blue.moveDown();
        if(level[currentLevel].green.present) {
            green.moveDown();
        }
    }
    
    if (e.key == "ArrowUp") {
        red.moveUp();
        blue.moveUp();
        if(level[currentLevel].green.present) {
            green.moveUp();
        }
    }
    
    if (e.key == "ArrowLeft") {
        red.moveLeft();
        blue.moveLeft();
        if(level[currentLevel].green.present) {
            green.moveLeft();
        }
    }
    
    if (e.key == "ArrowRight") {
        red.moveRight();
        blue.moveRight();
        if(level[currentLevel].green.present) {
            green.moveRight();
        }
    }
    setTimeout(() => {
        nextMove = true;
    }, 150);
}

let start = {
    x: 0,
    y: 0,
};
let move = {
    x: 0,
    y: 0,
};

let dx;
let adx;
let dy;
let ady;
let tempD = 25;
let movable = false;

document.addEventListener('touchstart', e => {
    start.x = e.touches[0].clientX;
    start.y = e.touches[0].clientY;
    start.time = Math.ceil(e.timeStamp);
});

document.addEventListener('touchmove', e => {
    if(!nextMove) return;
    nextMove = false;
    move.x = e.touches[0].clientX;
    move.y = e.touches[0].clientY;
    move.time = Math.ceil(e.timeStamp);
    dx = move.x - start.x;
    adx = Math.abs(dx);
    dy = move.y - start.y;
    ady = Math.abs(dy);
    movable = adx > tempD || ady > tempD;
    if(movable) {
        if(adx > ady && Math.sign(dx) == 1){
            red.moveRight();
            blue.moveRight();
            if(level[currentLevel].green.present) {
                green.moveRight();
            }
        }
        if(adx > ady && Math.sign(dx) == -1){
            red.moveLeft();
            blue.moveLeft();
            if(level[currentLevel].green.present) {
                green.moveLeft();
            }
        }
        if(adx < ady && Math.sign(dy) == 1){
            red.moveDown();
            blue.moveDown();
            if(level[currentLevel].green.present) {
                green.moveDown();
            }
        }
        if(adx < ady && Math.sign(dy) == -1){
            red.moveUp();
            blue.moveUp();
            if(level[currentLevel].green.present) {
                green.moveUp();
            }
        }
    }
    setTimeout(() => {
        nextMove = true;
    }, 150);
});

document.addEventListener('touchend', e => {
});

window.addEventListener('keydown', handleKeyDown);


gameLoop();
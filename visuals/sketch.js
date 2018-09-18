var canW = 700;
var canH = 700;

function setup (){
    createCanvas(canW, canH);
}

function draw (){
    background(0);
    stroke(255, 0, 0);
    fill(255);
    e.draw()
}

class Ellipse {
    constructor(cenX, cenY, width, height, direction) {
        this.cenX = cenX;
        this.cenY = cenY;
        this.width = width;
        this.height = height;
        this.mover = 0;
        this.direction = direction;
    }

    draw() {
        // if (this.direction == 1)
            ellipse(this.cenX, this.cenY + mover, this.width, this.height);
    }

    setDirection() {
        if ((this.cenY + height) > canH) {

        }
    }
}


var e = new Ellipse(canW/2, canH/2, 100, 100, 1);
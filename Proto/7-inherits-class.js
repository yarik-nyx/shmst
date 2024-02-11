'use strict'

class Rect{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    toString(){
        return `[x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height}]`
    }
}

class Square extends Rect {
    constructor(x, y, side){
        super(x, y, side, side)
    }
}

const r1 = new Rect(1, 2, 12, 25)
console.log(r1.toString())

const sq1 = new Square(3, 4, 5)

console.log(sq1.toString())
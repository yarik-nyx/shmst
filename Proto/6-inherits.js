'use strict'

function Rect(x, y, width, height){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
}

Rect.prototype.toString = function(){
    return `[x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height}]`
}

const r1 = new Rect(1, 2, 3, 4)
console.log(r1.toString())

function Square(x, y, side){
    Rect.call(this, x, y, side, side)
}


// Square.prototype = Object.create(Rect.prototype)
// //изза того что присвоили square.proto прототайп rect затерся конструктор
// Square.prototype.constructor = Square

Object.setPrototypeOf(Square.prototype, Rect.prototype)

const sq1 = new Square(3, 4, 6)
console.log(sq1.toString())

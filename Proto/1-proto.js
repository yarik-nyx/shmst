'use strict'

function Point(x, y){
    this.x = x
    this.y = y
}

//static method
Point.from = function(obj){
    const {x, y} = obj
    return new Point(x, y)
}

//obj method
Point.prototype.move = function (x, y){
    this.x += x
    this.y += y
}

const p1 = Point.from({x:1, y:2})
console.log(p1);
p1.move(33, 44)
console.log(p1);
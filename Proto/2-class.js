'use strict'

class Point{
    constructor(x,y) {
        this.x = x
        this.y = y
    }

    move(x, y){
        this.x += x
        this.y += y
    }

    toString(){
        return console.log(`[${this.x}, ${this.y}]`)
    }

    static from(obj){
        const {x , y} = obj
        return new Point(x, y)
    }
}

const p1 = new Point(1, 1)
p1.toString()
p1.move(1, 2)
p1.toString()
const p2 = Point.from(p1)
p2.move(3, 2)
p2.toString()
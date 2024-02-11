function move(x, y){
    this.x += x
    this.y += y
}

//1, 1
const p1 = {x:1, y:1}

//new function
const p1move = move.bind(p1)

p1move(3,3)

//4, 4
console.log(p1)

class Ground{
    constructor(x, y, w, h){
        this.x = x,
        this.y = y,
        this.width = w,
        this.height = h
        this.body = Bodies.rectangle(x, y, w, h, {isStatic: true})
        World.add(world, this.body)
    }
    
    display(){
        push();
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}
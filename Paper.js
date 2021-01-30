class Paper{
constructor(x,y,r){
    var ball_options ={
        restitution: 0.3,
        friction:0.5,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.r=r;

    this.ball = Bodies.circle(this.x,this.y,this.r/2,ball_options);
    World.add(world,this.ball);

}
display(){
var pos=this.ball.position;
push();
translate(pos.x,pos.y);
fill("cyan");
ellipseMode(CENTER);
ellipse(pos.x,pos.y,this.r,this.r);
pop();
}



}
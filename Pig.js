class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility=255;

  }
display()
{
  
  console.log(this.body.speed);
  if(this.body.speed<3)
  {
    super.display();
  }
else{

//not to display the pig
World.remove(world,this.body);
push();
this.Visibility=this.Visibilty-5;

//this.body=loadImage();
tint(255,this.Visibilty)
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();

}
}

};
var a,b


function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 b= createSprite(200, 100, 30, 30);
 a.shapeColor="yellow";
 b.shapeColor="yellow";
}

function draw() {
  background(255,255,255); 
  a.x=World.mouseX;
  a.y=World.mouseY; 
 if(a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2) {
  a.shapeColor="red"
  b.shapeColor="red" 
 }
 else{
  a.shapeColor="yellow";
 b.shapeColor="yellow"; 
 }
  drawSprites();
  
}
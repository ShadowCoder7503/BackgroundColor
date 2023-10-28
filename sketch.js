var a =0;
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.rotationSpeed=1;
}

function draw() 
{
  background("black");
  box.tint="grey";
  edges=createEdgeSprites();
  box.bounceOff(edges);
  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("darkred");
    box.tint="darkblue";
    box.x+=3;
   
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("darkblue");
    box.tint="darkred";
    box.x-=3;
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("#8B8000");
    box.tint="darkgreen";
    box.y-=3;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("darkgreen");
    box.tint="#8B8000";
    box.y+=3;
  }
  
    
  

  
  drawSprites();
}


  
var pet,petting,petting2;
var database,foodS;

function preload()
{
  petting = loadImage("images/dogImg.png");
  petting2 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  food =foodstockref;
  createCanvas(500, 500);
  pet = createSprite(250,350,5,5);
  pet.addImage(petting);
  pet.scale =0.25;
var foodstockref = database.ref("food");
 foodstockref.on("value",readStock);
}


function draw() {  
background(172, 242, 227);
  drawSprites();

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  foodS = foodS-1;
  pet.addImage(petting2);
}
if(keyWentDown(DOWN_ARROW)){
  writeStock(foodS);
  foodS = foodS+1;
  pet.addImage(petting);
}
text("𝐍𝐎𝐓𝐄: Press UP_ARROW key to feed Drago milk.",125,50);
text("𝒇𝒐𝒐𝒅 𝒓𝒆𝒎𝒂𝒊𝒏𝒊𝒏𝒈:"+foodS,200,100);

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref("/").update({
    food:x
  })
 
}





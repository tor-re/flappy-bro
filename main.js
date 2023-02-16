let score, player, building1, building2, gamerunning, d1, d2;
function setup() {
  button = createButton("play again?");
  button.position(160, 250);
  button.hide()
  gamerunning=true;
  createCanvas(400, 400);
  score=0;
  player={
    s:20,
    x:width/2 - 180,
    y:height/2 - 20,
    v:1
  };
  building1={
    x:350,
    y:random(150, 350),
    v:5,
    w:50,
    h:500
  };
  building2={
    x:350,
    y:building1.y - 100,
    v:building1.v,
    h:-500
  };
}

function draw() {
  if(gamerunning){
    button.hide()
    background(220);
    textAlign(LEFT);
    textSize(12);
    fill(249,226,43)
    stroke(0);
    square(player.x, player.y, player.s);
    player.y = player.y + player.v;
    fill(0,163,6);
    rect(building1.x,building1.y,building1.w,building1.h);
    rect(building2.x,building2.y,building1.w,building2.h);
    building1.x = building1.x - building1.v;
    fill(0);
    text(score,10,10);
    d1 = dist(player.x, player.y, building1.x, building1.y + 30)
    d2 = dist(player.x, player.y, building2.x, building2.y - 30)
    building2={
      x:building1.x,
      y:building1.y - 100,
      v:building1.v,
      h:-500
    };
    if(building1.x <= 0 && gamerunning){
      building1={
        x:350,
        y:random(150, 300),
        v:5,
        w:50,
        h:500
      };
      score++;
    }
    if(player.v < 6){
      player.v++;
    }
    if(player.y <= 0 || player.y >= 400 || d1 <= 50 || d2 <= 30){
      gamerunning = false;
      button.show()
    }
  }
  else{
    background(0); 
    textSize(50);
    fill(255);
    textAlign(CENTER);
    text("score: " + score, 200, 200)
    button.mousePressed(gamerestart);
  }
}
function keyTyped(){
  if(key==" "){
    player.v = -10;
  }
}
function gamerestart(){
  gamerunning = true;
  building1={
    x:350,
    y:random(150, 300),
    v:5,
    w:50,
    h:500
  };
  score = 0;
  player.y = height/2-20;
}

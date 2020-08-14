var ball,ball2,Database;
var position;
function setup(){
    createCanvas(500,500);
    Database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    ball2 = createSprite(200,200,10,10);
    ball2.shapeColor = "green";
    Database.ref('Car/position').on("value",function (data){
        position=data.val();
        ball2.x=position.x;
        ball2.y=position.y;
    })
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function writeposition(x,y){
    Database.ref('Car/position').set({
        x:ball2.x+x,
        y:ball2.y+y
    })

}

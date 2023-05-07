//Define the canvas and its content
const canvas = document.getElementByld("canvas");
const ctx = canvas.getContext("2d");
//Define the size of each segment of the snake
const segmentSize = 10;
//define starting position and snake length
let snake = [
    {x: 50,y: 50},
    {x: 40,y: 50},
    {x: 30,y: 50},
    {x: 20,y: 50}
];
/* The function that draws the snake 
Define the function that draws the snake */
function drawSnake(){
    ctx.fillStyle = "green";
    for(seg of snake){
    ctx.fillRect(seg.x, seg.y, segmentSize, segmentSize);
    }
}
drawSnake()
// Updates the positions of the snake
function moveSnake(){
    //remove last deg of snake
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}
//clears the the canvas and redraws snake
function redrawCanvas(){
    ctx.clearRect(0,0, canvas.width,canvas.height);
    drawSnake();
}
//define the movements of the snake
dx = segmentSize;
dy = 0;
//define funtion that handle arrow keys
function handleKeys(event){
    if (event.key = "ArrowLeft" && dx === 0){
        dx = -segmentSize;
        dy = 0;
    }
    if (event.key === "ArrowUp" && dy === 0){
        dx = 0;
        dy = segmentSize;     
    }
    if (event.key === "ArrowRight" && dx === 0){
        dx = segmentSize;
        dy = 0;
    }
    if (event.key === "ArrowDown" && dy === 0){
        dx = 0;
        dy = segmentSize;
    }
}
//add event listener for the arrow keys
document.addEventListener("keydown", handleKeys); //setting up for event listing
//Function that runs the game
function run(){
    //move snake
    moveSnake();
    redrawCanvas();
    //wait for the next frame
    requestAnimationFrame(run);
}
run()

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var lstY, lstX;

color = "black";
width = 4;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color = document.getElementById("clor").value;
    mouseEvent = "mouseDown";
}


canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
     
    mouseEvent = "mouseUP";
}


canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    
    mouseEvent = "mouseleave";
}


canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    console.log(mouseEvent);

    curr_X = e.clientX - canvas.offsetLeft;
    curr_Y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle = color;

        ctx.moveTo(lstX,lstY);
        ctx.lineTo(curr_X,curr_Y);
        ctx.stroke();

    }

    lstY = curr_Y;
    lstX = curr_X;
}

function clicky() 
{ ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}
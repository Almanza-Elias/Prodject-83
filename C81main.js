canvas=document.getElementById("myCanvas");
var startx, starty;
color="red";
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
ctx.beginPath();
ctx.strokeStyle=color;
var width_of_line=1;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
if (screen.width < 922)
{
    canvas.width = screen.width - 100;
    canvas.height = screen.height - 250;
    document .body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e)
{
    color= document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    startx= e.touches[0].clientX - canvas.offsetLeft;
    startY = e.touches[0].clientY - canvas.offsetTop;

}
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    currentx= e.touches[0].clientX - canvas.offsetLeft;
    currenty = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth = width_of_line;
          
 ctx.moveTo(startx,starty);
 ctx.lineTo(currentx,currenty);

 ctx.stroke();

 startx = currentx;
 starty = currenty;

}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
  mouseEvent="mouseDown";
    

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if(mouseEvent== "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width_of_line;

        console.log("last positon of x and y cordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y) ;
        
        
        console.log("current positon of x and y cordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y) ;
        ctx.stroke();


           
        
    

    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y
}
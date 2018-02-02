var setting="rect";

var canvas=document.getElementById("slate");
var ctx=canvas.getContext("2d");
var rect=function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
    ctx.fillRect(mouseX-10,mouseY-10,20,20);
};

var circle=function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
    ctx.beginPath();
    ctx.arc(mouseX,mouseY,10,0,2*Math.PI);
    ctx.fillStyle="blue";
    ctx.fill();
    ctx.stroke();
};

canvas.addEventListener("click",circle);
canvas.addEventListener("click",rect);



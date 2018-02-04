var rect=true;
var clearButton=document.getElementById("clear")
var toggleButton=document.getElementById("toggle")

var canvas=document.getElementById("slate");
var ctx=canvas.getContext("2d");
var recta=function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
    ctx.beginPath();
    ctx.fillStyle="red";
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

var draw=function(e){
    if (rect){
	recta(e);
    }
    else{
	circle(e);
    }
};

var clear=function(e){
    ctx.clearRect(0,0,500,500);
}

var toggle=function(e){
    rect=!rect;
}

    
canvas.addEventListener("click",draw);
clearButton.addEventListener("click", clear);
toggleButton.addEventListener("click", toggle);



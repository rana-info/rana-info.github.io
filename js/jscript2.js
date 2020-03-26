var link = ["heart_beat.jpg", "space.jpg", "slab.jpg"];
var i = 0;
var time = 3000;

var colors = ["#9400d3", "#4b0082", "#0000ff", "#00ff00", "#ffff00", "#ff7f00", "#ff0000"];
var j = 0;
var btime = 100;

function changeBorderColor(){
	var ele = document.getElementById("slideImg");
	if(j == 6){
		j = -1;
	}
	ele.style.border = "2px solid" + colors[++j];
	setTimeout("changeBorderColor()", btime);
}
function autoChange(){
	var ele = document.getElementById("slideImg");
	if(i == 2){
		i = -1;
	}
	ele.src = "imgs/" + link[++i];	
}

function nextImage(){
	var ele = document.getElementById("slideImg");
	if(i == 2){
		i = -1;
	}
	ele.src = "imgs/" + link[++i];
}
function prevImage(){
	var ele = document.getElementById("slideImg");
	if(i == 0){
		i = 3;
	}
	ele.src = "imgs/" + link[--i];
}

window.onload = autoChange;

window.onload = changeBorderColor;

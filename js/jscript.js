var link = ["heart_beat.jpg", "space.jpg", "slab.jpg"];
var i = 0;
var time = 3000;
var iter = 1;
var k = 0;

var j = 0;
var btime = 100;
window.onload = () => {
	var eleImg = document.getElementById("logoID");
	var eleNav = document.getElementById("navbarID");
	var eleBody = document.getElementById("bodyID");
	var eleFooter = document.getElementById("footerID");
	var eleCredits = document.getElementById("creditsID");

	var imgHeight = eleImg.offsetHeight + 1.5 + 'px';
	var navHeight = eleNav.offsetHeight + 2 + 'px';
	var bodyTop = eleImg.offsetHeight + 2 + eleNav.offsetHeight + 2 + 'px';
	var bodyHeight = eleBody.offsetHeight + 'px';
	var footerTop = eleImg.offsetHeight + 2 + eleNav.offsetHeight + 2 + eleBody.offsetHeight + 'px';
	var footerHeight = eleFooter.offsetHeight + 'px';
	var creditsTop = eleImg.offsetHeight + 2 + eleNav.offsetHeight + 2 + eleBody.offsetHeight + eleFooter.offsetHeight + 'px';
	var creditsHeight = eleCredits.offsetHeight + 'px';

	
	document.getElementById("bg-1").style.height = imgHeight;
	document.getElementById("bg-2").style.top = imgHeight;
	document.getElementById("bg-2").style.height = navHeight;
	document.getElementById("bg-3").style.top = bodyTop;
	document.getElementById("bg-3").style.height = bodyHeight;
	document.getElementById("bg-4").style.top = footerTop;
	document.getElementById("bg-4").style.height = footerHeight;
	document.getElementById("bg-5").style.top = creditsTop;
	document.getElementById("bg-5").style.height = creditsHeight;
	setTimeout(2000, changeImg());
}


function changeImg(){
	var ele0 = document.getElementById("slideImg");
	
	if(k == 2){
		k = -1;
	}
	
	if((iter % 20) == 0){
		iter = 0;
		ele0.src = "imgs/" + link[++k]; 
	}

	iter += 1;

	setTimeout("changeImg()", btime);	
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
function closePopup(){
	var elePopup = document.getElementById("popupID");
	elePopup.style.display = "none";
}
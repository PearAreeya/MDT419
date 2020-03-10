window.onload = pageLoad;

function pageLoad(){
		   var x = document.getElementById("start");
		    x.onclick = startGame;
 }

function startGame(){
	alert("Ready");
	addBox();
    timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*30; 
	var x = document.getElementById('clock');
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
		
		

		var allbox = document.querySelectorAll("#squares-layer div");
		// alert(allbox.length);  เวลา
		if(allbox.length == 0 && second >= 0 ){
			alert("win");
			clearInterval(timer);
			clearScreen();
		}
		else if (allbox.length > 0 && second == 0) {
			alert("lose");
			clearInterval(timer);
			clearScreen();
		}
		else (second -= 1 )
		
		x.innerText = second;
	}
	
}

function addBox(){
	// alert(document.getElementById("numbox").value);
	// alert(document.getElementById("color").value);

	 var numbox = document.getElementById("numbox").value;
	 var squaresLayer = document.getElementById("squares-layer");
	 var colorDrop = document.getElementById("color").value;
	 for (var i =0; i<numbox;i++){
     var tempbox = document.createElement("div");
		 tempbox.className = "square";
		 tempbox.classList.add(colorDrop);
		 
	 	tempbox.id = "box"+i;
	 	tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		 bindBox(tempbox);
	 }
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function removeMe(){
    box.parentNode.removeChild(box);		
	}
}


function clearScreen(){
	 var allbox =  document.querySelectorAll("#squares-layer div");
	// location.reload();

// 	//delete all  squares
for (var i=0;i<allbox.length;i++){
	allbox[i].parentNode.removeChild(allbox[i]);
		
	}
}
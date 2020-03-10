window.onload = pageLoad;

function pageLoad(){
    var clickButton0 = document.getElementById("project");
	clickButton0.onsubmit = validateForm;
	var clickButton1 = document.getElementById("recipe");
	clickButton1.onsubmit = validateForm;
	var clickButton2 = document.getElementById("blog");
	clickButton2.onsubmit = validateForm;
	var clickButton3 = document.getElementById("Register and login");
	clickButton3.onsubmit = validateForm;
	var clickButton4 = document.getElementById("Square game");
    clickButton4.onsubmit = validateForm;
}
function pageLoad(){
		   var x = document.getElementById("start");
		    x.onclick = startGame;
 }

//game

function startGame(){
	alert("Ready");
	addBox();
    timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*50; 
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


//blog
var q=0;
function postFunction(){
    var post1 = document.getElementById("post1");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2");
    var text1 = document.getElementById("text1");
    
    var text = text1.value;
    
    if(q==0)
    {
        post1.innerHTML = text;
        q++;
    }
    else if(q==1)
    {
        reply1.innerHTML = text;
        q++;
    }
    else
        reply2.innerHTML = text;
}

function clearFunction(){
    var post1 = document.getElementById("post1");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2");
    var text1 = document.getElementById("text1");

    post1.innerHTML = "";
    reply1.innerHTML = "";
    reply2.innerHTML = "";
    q=0;
}

//login
function getParams() {
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++) {
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
   }
	return params;
}

window.onload = loginLoad;
function loginLoad(){
  // วิธีใช้ getParams()
  var parameter = getParams();
  console.log(parameter["username"]);
  console.log(parameter["password1"]);
  var clickButton = document.getElementById("myLogin");
  clickButton.onsubmit = checkLogin;
}


function checkLogin(){
  //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
  var parameter = getParams();
  var y = document.forms["myLogin"]["username"].value;

  var z = document.forms["myLogin"]["password"].value;

if(y==parameter["username"]&&z==parameter["password1"]){
   alert("true");
}
else{
   alert("false");
}
return(false);
}


//register
function pageLoad(){
    var clickButton = document.getElementById("myForm");
    clickButton.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var y = document.forms["myForm"]["password1"].value;
    
    var z = document.forms["myForm"]["password2"].value;
    
    if(y==z){
        
    }
    else if(y!=z){
        var password = document.getElementById("errormsg");
        password.innerHTML = "Password is not match";
        return false;
    }
}
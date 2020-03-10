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
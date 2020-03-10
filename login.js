function getParams() {
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
		for (var i = 0; i < pairs.length; i++) {
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
	}
	return params;
}

window.onload = loginLoad;
function loginLoad() {

	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;

}

function checkLogin() {
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var x = document.forms["myLogin"]["username"].value;
	var y = document.forms["myLogin"]["password"].value;
	var parameter = getParams();
	
	console.log(parameter);
	if (x == parameter.username && y == parameter.password1) {
		
		alert("true");
	}
	else {
		alert("false");
		return false;
	}

}

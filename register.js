window.onload = pageLoad;
function pageLoad(){

var form = document.getElementById("myForm");
form.onsubmit = validateForm;

}

 //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
function validateForm() {
    var x = document.forms["myForm"]["password1"].value;
    var y = document.forms["myForm"]["password2"].value;
    
    if(x == y) {          
       alert("true")
    } 

    else{
    var error = document.getElementById("errormsg");
    error.innerHTML = "รหัสผ่านไม่ถูกต้อง";
    return false;
    }
}

var num = 0;

function postFunction(){
    var post1 = document.getElementById("post1");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2");
    var text1 = document.getElementById("text1");
    
    var text = text1.value;
    if(num==0){
         post1.innerHTML= text;
         text1.value="";
         num++;
    }
    else if(num==1){
        reply1.innerHTML= text;
        text1.value="";
        num++;
   }
    else if(num==2){
        reply2.innerHTML= text;
        text1.value="";
   }
  
}

function clearFunction(){
    var post1 = document.getElementById("post1");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2");
    
    
    post1.innerHTML="";
    reply1.innerHTML="";
    reply2.innerHTML="";
    text1.value="";
    num=0;
    
}

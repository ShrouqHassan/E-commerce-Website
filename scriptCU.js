//========================form validation ========================

// var regex = new RegExp('/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/');
var msgs=document.getElementsByClassName("msgs");
var Name = document.getElementById("username");
var email= document.getElementById("Email");

function checkvalidity(){
    var flag=0;
Name.addEventListener("input",function(){msgs[0].style.display="none"});
email.addEventListener("input",function(){msgs[1].style.display="none"});
if(Name.value.length==0){
    msgs[0].style.display="block";
    flag=1;
}
else if(!isNaN(Name.value)){
msgs[1].style.display="block";
flag=1;
}
if(!/^[a-z]{3,}\d*@(yahoo|gmail)(.com)$/.test(email.value)){
msgs[2].style.display="block";
flag=1;
}

if(!flag)
submit();
}

function set(){
    msgs[0].style.display="none";
    msgs[1].style.display="none";
    msgs[2].style.display="none";
}

function submit(){
    console.log("hello ");
    alert("message submitted succesfully!");
}
//=================item details===============

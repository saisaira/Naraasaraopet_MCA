function json(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if (xhr.readyState===4 && xhr.status===200) {
      callback(xhr.responseText);
    }
  }
xhr.send();
}
json("data.json",function(text){
  let d=JSON.parse(text);
  console.log(d);
  Details(d.basicdetails);
  carrier(d.carrier);
  edu(d.education);
  skillsdata(d.skills);
  Ache(d.Achevements);
})
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
left.setAttribute("id","basicdetails");
main.appendChild(left);
function Details(MCA) {
  var i=document.createElement("img");
  i.src=MCA.image;
  left.appendChild(i);
  var name=document.createElement("h1");
  name.textContent=MCA.name;
  left.appendChild(name);
 var p=document.createElement("h4");
 p.textContent=MCA.phone;
 left.appendChild(p);
 var mail=document.createElement("h3");
 mail.textContent=MCA.email;
 left.appendChild(mail);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);

function edu(NEC){
var edu=document.createElement("div");
edu.classList.add("edetails");
right.appendChild(edu);
var head=document.createElement("h1");
head.textContent="Educational Details";
edu.appendChild(head);
head.appendChild(document.createElement("HR"));
for (var i = 0; i < NEC.length; i++) {
  var title=document.createElement("h1");
title.textContent=NEC[i].course;
edu.appendChild(title);
var col=document.createElement("ul");
edu.appendChild(col);
var li=document.createElement("li");
li.textContent=NEC[i].college;
col.appendChild(li);
var list=document.createElement("li");
  list.textContent=NEC[i].percentage;
col.appendChild(list);
}
}
function carrier(car){
var c=document.createElement("h1");
c.textContent="carrier Objective:"
right.appendChild(c);
c.appendChild(document.createElement("HR"));
var para=document.createElement("p");
para.textContent=car.carr;
right.appendChild(para);
}
function skillsdata(skill){
var s=document.createElement("h1");
s.textContent="Skills Set:";
right.appendChild(s);
s.appendChild(document.createElement("HR"));
var t=document.createElement("table");
var tdata="";
for (var i = 0; i < skill.length; i++) {
tdata+="<tr><td>"+skill[i].name+"</td><td>"+skill[i].value+"</td></tr>";
}
t.innerHTML=tdata;
right.appendChild(t);
}
 function Ache(A){
   var s=document.createElement("h1");
   s.textContent="Achevements:";
   right.appendChild(s);
   s.appendChild(document.createElement("HR"));
for (var i = 0; i < A.length; i++) {
  var lo=document.createElement("ul");
  right.appendChild(lo);
  var list=document.createElement("li");
  list.textContent=A[i];
  lo.appendChild(list);
}
 }

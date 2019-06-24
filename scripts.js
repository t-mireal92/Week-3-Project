var h1 = document.querySelector("h1");
h1.style.color = "#900C3F";
h1.style.textAlign="center";
var x = 0;
var array = Array();
function contact_function() 
{
fname = document.querySelector("#fname").value;
sname = document.querySelector("#sname").value;
tel = document.querySelector("#tel").value;
email = document.querySelector("#email").value;
address = document.querySelector("#address").value;
if (fname.length > 10 ) 
{
alert("The First name must have no more than 10 characters");  
Submitted = "false";
}
if (sname.length >10) 
{
alert("The Second name must have no more than 10 characters");  
Submitted = "false";
}
if (fname.length=="" || sname.length=="" || tel.length==""|| email.length==""||address=="") 
{
alert("Name field can not be empty!");  
Submitted = "false";
}
else
array[0] =fname;
array[1]=sname;
array[2]=email;
array[3]=address;
alert("Saved!");
}
function search_function()
{
for (var y=0; y<array.length; y++)
{
var e=array[y];
}
 
document.getElementById("search").innerHTML = e;
}


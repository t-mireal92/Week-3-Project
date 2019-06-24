var h1 = document.querySelector('h1');
h1.style.color = "red";
h1.style.textAlign="center";
var button = document.getElementById('button-id').addEventListener('click', buttonClick());
var buttonClick = () =>
{
document.querySelector('#text').style.backgroundColor = '#f4f4f4'; 
};
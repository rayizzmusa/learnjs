alert("Hello from script.js");
var nama = prompt("Please enter your name:");
alert ("Welcome, " + nama + "!");

var conf = confirm("Are you ready to learn JavaScript, " + nama + "?");
if (conf == true){
    alert("Great! Let's get started, " + nama + "!");
}else {
    alert("No worries, take your time " + nama + "!");
}
//document.getElementById("demo").innerHTML = "Hello World!";
//console.log("hello");
//var p =document.getElementsByTagName(p);
//console.log(p);
function myFunction(){
    var x = document.getElementsByTagName('LI');
    document.getElementById("demo").innerHTML = x[0].innerHTML;
}
document.all[3].textContent = "Changes will Done Over Here";
console.log(document.all[3]);
             //getElementsByTagName example
/*
var lengthOfLi = document.getElementsByTagName("li")[0].innerHTML = "tag name";
console.log(lengthOfLi);
*/
function myFunction1(){
    var y = document.getElementsByTagName("p");
    for (var i = 2; i<y.length; i++){
        y[i].style.backgroundColor = "blue";
    }

}

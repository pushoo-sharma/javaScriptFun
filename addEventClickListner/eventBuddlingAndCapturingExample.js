function buddling(){
    document.getElementById("demo").innerHTML = "Event Buddling";
    document.getElementById("Div").addEventListener('click',function(){
        alert("You got parent");
    },false);
    document.getElementById("pa").addEventListener('click',function(){
        alert("You got child");
    },false);
}
function capturing(){
    document.getElementById("demo").innerHTML = " Capturing";
    document.getElementById("Div").addEventListener('click',function(){
        alert("You got parent");
    },true);
    document.getElementById("pa").addEventListener('click',function(){
        alert("You got child");
    },true);
}
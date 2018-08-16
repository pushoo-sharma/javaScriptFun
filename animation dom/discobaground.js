var a;
function myFunction(){
    a = setInterval(start,1000);
}
function start(){
    var x = document.body;
    x.style.backgroundColor = x.style.backgroundColor === 'yellow' ? 'blue' : 'yellow';
}
function myFunction2(){
    clearInterval(a);
}
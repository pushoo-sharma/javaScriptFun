function move(){
    var elem = document.getElementById("box");
    var pos = 0;
    var id = setInterval(frame,5);
    function frame(){
        if(pos == 370){
            clearInterval(id);
        }
        else{
            pos ++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
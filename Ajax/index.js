function load(){
    var http = new XMLHttpRequest();
    //console.log(http);
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //document.getElementById("demo").innerHTML = this.getResponseHeader;
            document.getElementById("demo").innerHTML = this.responseText;
        }
        console.log(this.readyState);
        console.log(http);
    };
    http.open("GET","index.txt",true);
    http.send();
    console.log("test asyn.");
}
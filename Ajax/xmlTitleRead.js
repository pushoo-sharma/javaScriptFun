function callback(){
    var http  = new XMLHttpRequest();
    var xmlDoc,title,text = "";
    http.onreadystatechange = function(){
    if(http.readyState == 4 && this.status == 200){
        xmlDoc = this.responseXML;
       // console.log(xmlDoc.getElementsByTagName("plants"));
        title = xmlDoc.getElementsByTagName("plants");
        for(var i = 0; i<title.length; i++){
            text += title[i].childNodes[0].nodeValue;
            text += "<br>";
        }
        document.getElementById("demo").innerHTML = text;
        }
    };
    http.open("GET","xml.xml",true);
    http.send();
}
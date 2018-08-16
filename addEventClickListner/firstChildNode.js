//   Similar 
//console.log(document.getElementById("id01").firstChild.nodeValue);
//console.log(document.getElementById("id01").childNodes[0].nodeValue);

//  Document Body
//console.log(document.body);

//  allow the full acccess of document
//console.log(document.body);
//alert(document.documentElement.innerHTML);

//   create Node 
var par = document.createElement("p");
var node = document.createTextNode("This is new.");
par.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(par);

//    querySelectorAll
var node = document.querySelectorAll("p");
console.log(node[2]);
var parent = document.querySelectorAll("div");
console.log(parent[0].firstChild);
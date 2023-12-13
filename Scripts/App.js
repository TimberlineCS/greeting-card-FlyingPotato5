//Connor Wing
//1
//12/11/23

/*This is a javascript christmas card*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */

//This isn't a html class, it's actually a css class disguised as a javascript class.

var text = document.createElement("div");
var background = document.createElement("div");
var snowyBackground =  document.createElement("div");
var snowGIF = document.createElement("img");

text.id = "coolfont";
text.innerHTML = "Have a Snowy Christmas!";
text.style.backgroundColor = "black"
text.style.color = "white";
text.style.fontSize = "3em";
text.style.textAlign = "center";

document.body.style.backgroundColor  = "#77d7f2";
document.body.style.height = "100%";
document.documentElement.style.height = "100%";

background.style.width = "60%";
background.style.height = "100%";
background.style.padding = "20%";//creates

snowyBackground.style.width = "163%";
snowyBackground.style.height = "40%";
snowyBackground.style.backgroundColor = "#FFF";
snowyBackground.style.outline = "5px";
snowyBackground.style.outlineColor = "gray";
snowyBackground.style.outlineStyle = "solid";
snowyBackground.style.position = "relative";
snowyBackground.style.translate = "0% -130%";

snowyBackground.style.padding = "1%";
snowyBackground.style.zIndex = 2;
snowyBackground.style.marginLeft = "-32%";

snowGIF.src = "Images/FallingSnowTransparent.gif";
snowGIF.style.height = "100%";
snowGIF.style.width = "163%";
snowGIF.style.position = "relative";
snowGIF.style.zIndex = 3;
snowGIF.style.marginLeft = "-32%";
snowGIF.style.marginTop = "-35%";

document.body.append(text);
document.body.append(background);
background.append(snowGIF);
background.append(snowyBackground);


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
text.id = "coolfont";
text.innerHTML = "Have a Snowy Christmas!";
text.style.backgroundColor = "black"
text.style.color = "white";
text.style.fontSize = "3em";
text.style.textAlign = "center";

document.body.style.backgroundColor  = "#77d7f2";

background.style.width = "60%";//stretches the div but keeps it in bounds on the
background.style.padding = "20%";//creates

snowyBackground.style.width = "100%";
snowyBackground.style.height = "30%";
snowyBackground.style.backgroundColor = "#FFF";
snowyBackground.style.outline = "5px";
snowyBackground.style.outlineColor = "gray";
snowyBackground.style.top = "40%";
snowyBackground.style.position = "relative";
snowyBackground.style.padding = "1%";
snowyBackground.style.zIndex = 2;

document.body.append(text);
document.body.append(background);
background.append(snowyBackground);


//Connor Wing
//1
//12/11/23

/*This is a javascript christmas card*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */

//This isn't a html class, it's actually a css class disguised as a javascript class.

var text = document.createElement("div");
text.id = "coolfont";
text.innerHTML = "Have a Snowy Christmas!";
text.style.backgroundColor = "black"
text.style.color = "white";
text.style.fontSize = "3em";
text.style.textAlign = "center";

document.body.append(text);
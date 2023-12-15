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
var snowyBackground2 =  document.createElement("div");
var snowGIF = document.createElement("img");
var noelle = document.createElement("img");
var wind = new Audio("Music/Wind.mp3");
var holidayjam = new Audio("Music/HolidayStudio.mp3");
var eventbutton =  document.createElement("div");
// thank you chrome for making autoplay audio impossible
var ralsei =  document.createElement("img");
var eventdebounce = false;
var triangle = document.createElement("div");
var spotlightred = document.createElement("div");
var spotlightgreen = document.createElement("div");

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

noelle.src = "Images/noelle-deltarune.gif";
noelle.style.height = "50%";
noelle.style.width = "50%";
noelle.style.position = "relative";
noelle.style.zIndex = 2;
noelle.style.marginLeft = "0%";
noelle.style.marginTop = "-35%"; 
noelle.style.translate = "0% -130%";

eventbutton.style.width = "10%";
eventbutton.style.height = "10%";
eventbutton.style.backgroundColor = "red";
eventbutton.style.outline = "5px";
eventbutton.style.outlineColor = "dark-red";
eventbutton.style.outlineStyle = "solid";
eventbutton.style.position = "relative";
eventbutton.style.translate = "0% -1060%";

eventbutton.style.zIndex = 4;
eventbutton.style.marginLeft = "120%";
eventbutton.id = "event";


ralsei.src = "Images/ralsei-dance.gif";
ralsei.style.height = "50%";
ralsei.style.width = "50%";
ralsei.style.position = "relative";
ralsei.style.zIndex = 2;
ralsei.style.marginLeft = "0%";
ralsei.style.marginTop = "30%";
ralsei.style.translate = "50% -60%";
ralsei.hidden = true;

snowyBackground2.style.width = "30%";
snowyBackground2.style.height = "30%";
snowyBackground2.style.backgroundColor = "#FFF";
snowyBackground2.style.outline = "5px";
snowyBackground2.style.outlineColor = "gray";
snowyBackground2.style.outlineStyle = "solid";
snowyBackground2.style.position = "relative";
snowyBackground2.style.translate = "0% -380%";
snowyBackground2.style.borderRadius = "50%";
snowyBackground2.style.zIndex =  1;
snowyBackground2.style.marginLeft = "-32%";

triangle.style.border = "#285e01 solid 100px";
triangle.style.position = "relative";
triangle.style.translate = "110% -530%";
//triangle.style.outline = "5px"
//triangle.style.outlineColor = "#214a03";
//triangle.style.outlineStyle = "solid";
triangle.style.width = "0px";
triangle.style.height = "0px";
triangle.style.borderLeftColor = "transparent";
triangle.style.borderRightColor = "transparent";
triangle.style.borderTopColor = "transparent";
document.body.append(triangle);

spotlightred.style.width = "20%";
spotlightred.style.height = "20%";
spotlightred.style.backgroundColor = "red";
spotlightred.style.opacity = 0.3;
spotlightred.style.position = "relative";
spotlightred.style.translate = "0% -670%";
spotlightred.style.borderRadius = "50%";
spotlightred.hidden = true;
spotlightred.style.zIndex =  6;
spotlightred.id = "red";

spotlightgreen.style.width = "20%";
spotlightgreen.style.height = "20%";
spotlightgreen.style.backgroundColor = "green";
spotlightgreen.hidden = true;
spotlightgreen.style.opacity = 0.3;
spotlightgreen.style.position = "relative";
spotlightgreen.style.translate = "120% -670%";
spotlightgreen.style.borderRadius = "50%";
spotlightgreen.style.zIndex =  5;
spotlightgreen.id = "green";
//spotlight animations
//nvm using css

function unhideralsei() {
ralsei.hidden = false;
text.style.zIndex = 5;
text.innerHTML = "Have a 8-bit Christmas!";
snowyBackground.hidden = true;
triangle.hidden = true;
spotlightgreen.hidden = false;
spotlightred.hidden = false;

holidayjam.volume = 0.7;
holidayjam.loop = true;
holidayjam.play();

}
//stolen from website
document.onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;
    if(eventdebounce == false) {
        console.log(eventdebounce);
        wind.volume = 0.7;
        wind.loop = true;
        wind.play();
    }
  
};



document.body.append(text);
document.body.append(background);
document.body.append(wind);
document.body.append(holidayjam);
background.append(snowGIF);
background.append(noelle);
background.append(snowyBackground);
background.append(eventbutton);
background.append(ralsei);
background.append(snowyBackground2);
background.append(triangle);
background.append(spotlightgreen);
background.append(spotlightred);

document.getElementById("event").onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

    eventdebounce = true;
    wind.pause();
    wind.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=';
    snowGIF.hidden = true;
    console.log(snowGIF.hidden);
    noelle.hidden = true;
    eventbutton.hidden = true;
    snowyBackground2.hidden = true;
    snowyBackground.style.backgroundColor = "#000";
    snowyBackground.style.outline = "0px";
    

    document.body.style.backgroundColor  = "#000";
    const myTimeout = setTimeout(unhideralsei, 1810);
};

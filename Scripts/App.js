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
var noelle = document.createElement("img");
var wind = new Audio("Music/Wind.mp3");
var holidayjam = new Audio("Music/HolidayStudio.mp3");
var eventbutton =  document.createElement("div");
// thank you chrome for making autoplay audio impossible
var ralsei =  document.createElement("img");
var eventdebounce = false;


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
ralsei.style.translate = "50% -170%";
ralsei.hidden = true;


function unhideralsei() {
ralsei.hidden = false;

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
background.append(snowGIF);
background.append(noelle);
background.append(snowyBackground);
background.append(eventbutton);
background.append(ralsei);

document.getElementById("event").onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

    eventdebounce = true;
    wind.pause();
    wind.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=';
    snowGIF.hidden = true;
    noelle.hidden = true;
    eventbutton.hidden = true;
    snowyBackground.style.backgroundColor = "#000";
    snowyBackground.style.outline = "0px";

    text.hidden = true;
    document.body.style.backgroundColor  = "#000";
    const myTimeout = setTimeout(unhideralsei, 1810);
};

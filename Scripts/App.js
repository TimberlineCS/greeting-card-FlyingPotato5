//Connor Wing
//1
//12/11/23

//This isn't a html class, it's actually a css class disguised as a javascript class.

var text = document.createElement("div");
var background = document.createElement("div");
var snowyBackground =  document.createElement("div");
var snowyBackground2 =  document.createElement("div");
var snowGIF = document.createElement("img");
var noelle = document.createElement("img");
var wind = new Audio("Music/Wind.mp3");
var holidayjam = new Audio("Music/HolidayStudio.mp3");
// thank you chrome for making autoplay audio impossible
var eventbutton =  document.createElement("div");
var ralsei =  document.createElement("img");
var eventdebounce = false;
var triangle = document.createElement("div");
var spotlightred = document.createElement("div");
var spotlightgreen = document.createElement("div");
//initialize everything
text.id = "coolfont";
text.innerHTML = "Have a Snowy Christmas!";
text.style.backgroundColor = "black"
text.style.color = "white";
text.style.fontSize = "3em";
text.style.textAlign = "center";
//style text
document.body.style.backgroundColor  = "#77d7f2";
document.body.style.height = "100%";
document.documentElement.style.height = "100%";
//make background blue
background.style.width = "60%";
background.style.height = "100%";
background.style.padding = "20%";//creates
// div that all other elements are in
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
// style snowground
snowGIF.src = "Images/FallingSnowTransparent.gif";
snowGIF.style.height = "100%";
snowGIF.style.width = "163%";
snowGIF.style.position = "relative";
snowGIF.style.zIndex = 3;
snowGIF.style.marginLeft = "-32%";
snowGIF.style.marginTop = "-35%";
//style snow gif
noelle.src = "Images/noelle-deltarune.gif";
noelle.style.height = "50%";
noelle.style.width = "50%";
noelle.style.position = "relative";
noelle.style.zIndex = 2;
noelle.style.marginLeft = "0%";
noelle.style.marginTop = "-35%"; 
noelle.style.translate = "0% -130%";
//style noelle gif
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
//style button

ralsei.src = "Images/ralsei-dance.gif";
ralsei.style.height = "50%";
ralsei.style.width = "50%";
ralsei.style.position = "relative";
ralsei.style.zIndex = 2;
ralsei.style.marginLeft = "0%";
ralsei.style.marginTop = "30%";
ralsei.style.translate = "50% -60%";
ralsei.hidden = true;
//style ralsei gif, set to hidden until the button is clicked
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
//styles snow hill
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
//styles green triangle/mountain thingy
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
//styles spotlight(s), set to hidden for now
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
//changes text and unhides spotlights and ralsei
holidayjam.volume = 0.7;
holidayjam.loop = true;
holidayjam.play();
//plays audio
}
//stolen from website
document.onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;
    if(eventdebounce == false) {
        //when the eventdebounce is set to true in the second screen the wind won't play anymore when you click on the screen
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
//append everything
document.getElementById("event").onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

    eventdebounce = true;
    // so the wind sound effect can't play in the second screen
    wind.pause();
    wind.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=';
    // sets the audio data to silent instead of just pausing it and leaving it there.
    snowGIF.hidden = true;
    console.log(snowGIF.hidden);
    noelle.hidden = true;
    eventbutton.hidden = true;
    snowyBackground2.hidden = true;
    snowyBackground.style.backgroundColor = "#000";
    snowyBackground.style.outline = "0px";
    //hide everything and set the background to black

    document.body.style.backgroundColor  = "#000";
    const myTimeout = setTimeout(unhideralsei, 1810);
    //unhide ralsei starts in 2 seconds
};

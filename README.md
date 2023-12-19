
# Project 2: Greeting Card

* Author: Connor Wing
* Class: CSP Period 1
* Semester: Winter 2023

<i>i just wanted an excuse to use html</i>

<img src="https://media.tenor.com/C8MpzwDxl40AAAAM/ltg-low-tier-god.gif" width="150px">

## Overview

This Webpage displays two animations that appear depending on the user input. If you click the red button, the text changes and a new "animation" appears.
## Compiling and Using

In order to load you need to clone the repository and open index.html in any browser of choice. Or you could <a href="https://timberlinecs.github.io/greeting-card-FlyingPotato5/">use the live link.</a> In order to hear the sound you must click on the screen at least once. If you want to see the second screen, click on the red button.

## Discussion

When I realized  I wanted to have the music play automatically I found out about a lovely little browser update the prevents music from being automatically played without user input. I guess it makes sense and made me wonder about how internet/browser regulations had evolved from the wilder west days of the 90's, and thinking if this update broke any websites that relied on being able to play audio automatically anymore. 

Another challenge was making the second screen. I wanted the second screen to load after a 2 second delay, but Javascript doesn't provide a native sleep function (kinda) so I had to use setTimeout instead which needs a funciton to run after the delay. So I ended up making a function called unhideralsei() that executes after the setTimeout.

I also learned about how to (albeit jankily) make a webpage that scales to the users device. I already knew that setting stuff to pixels doesn't work for all devices, which is part of the reasons a lot of old sites/forums look weird now we have higher resolution displays. I was able to get it to 'scale' by giving every parent element a height of 100% and also scaling everything else with percentages. I then positioned things to overlap each other with the translate and margin properties.

## Extra Credit

uhhh i added user input that's all i got.

## Sources used

- Oh no
- W3 Schools for documentation on Html, CSS, and JS.
- Lots of Stackoverflow(~~to much stackoverflow~~) for stuff like the setTimeout function and ideas on how to relatively position objects. Also helped me debug some things.

  - https://stackoverflow.com/questions/2027657/overlapping-elements-in-css  
  - https://stackoverflow.com/questions/2621835/detect-click-on-browser 
  - https://stackoverflow.com/questions/14834520/html5-audio-stop-function https://stackoverflow.com/questions/37115491/how-to-set-volume-of-audio-object
  - https://stackoverflow.com/questions/31728022/why-is-percentage-height-not-working-on-my-div

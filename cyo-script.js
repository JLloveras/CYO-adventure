//This variable measures the adventure's "Page", determining what choices can be made.
let page=1;
//This variable measures the Player's tools. 1=Flashlight(Empty) 2=Battery, etc.
let tools=0;
let title=document.getElementsByTagName("title");
let background=document.querySelector("body");
let pageName=document.getElementsByTagName("h1");
let paragraphs=document.getElementsByTagName("p");
let hiddenText=document.getElementsByClassName("hidden-text");
let remove=document.getElementById("page-1");
let buttonLeft=document.getElementById("button-left");
let buttonRight=document.getElementById("button-right");

buttonLeft.addEventListener("click", function() {
    if(page==1 || page==5){
       page=2;
        title[0].innerHTML= "CYOA: Pressing Ahead";
        pageName[0].innerHTML= "Pressing Ahead"
        paragraphs[0].innerHTML= "We stand up, brushing the dust off of ourselves as we open the door in front of us. It's a hallway, stretching into the distance. We walk forwards, the torches on the walls getting further apart the farther we walk, until we reach a crossroads.";
        paragraphs[1].innerHTML= "There are two paths. One is well-lit, the walls themselves seeming to shine. The other is dark, torches snuffed out, and the very air seems to crave the light of the other tunnel.";
        remove.style.display="none";
        hiddenText[0].innerHTML="To become truly free, you must embrace both the positive and the negative. Find the tool";
        buttonLeft.innerHTML="Walk into the darkness";
        buttonRight.innerHTML="Walk into the light";
        buttonRight.style.display="inline";
    }else if(page==2){
       page=8;
        title[0].innerHTML= "CYOA: Darkness";
        background.style.backgroundColor="#333"
        pageName[0].innerHTML= "Dark"
        paragraphs[0].innerHTML= "Deciding to enter the darkness, we take a quick breath before stepping into the shadows. The darkness envelops us, covering everything in a blanket of pitch dark. Our eyes can barely adjust to the shade, yet we press forwards, firm in our resolve.";
        paragraphs[1].innerHTML= "";
        hiddenText[0].innerHTML="There cannot be good without evil, lest the light is unappreciated";
        hiddenText[0].style.color="#333"
        buttonLeft.innerHTML="Press onwards into the dark";
        buttonRight.style.display="none";
    }else if(page==8){
       page=12;
        title[0].innerHTML= "CYOA: Darkness";
        background.style.backgroundColor="#222"
        pageName[0].innerHTML= "Darker"
        paragraphs[0].innerHTML= "Forging further into the darkness, our eyes begin to fail. The light seems so far away, and our very hands seem to no longer exist. The only thing that is certain is the sound of our footsteps, the only foundation steeling our resolve within this dark world.";
        paragraphs[1].innerHTML= "";
        hiddenText[0].innerHTML="Focus on the truths. The only thing hiding in the dark is your own imagination.";
        hiddenText[0].style.color="#222"
        buttonLeft.innerHTML="Walk further into the dark.";
    }else if(page==12){
       page=7;
        title[0].innerHTML= "CYOA: Darkness";
        background.style.backgroundColor="#111"
        pageName[0].innerHTML= "Yet Darker"
        paragraphs[0].innerHTML= "Traveling yet further down this hallway, it seems to get even darker. It's all pitch-black. We can't even tell if our eyes are open or closed at this point. Even our footsteps seem to sound unsure, as if the darkness itself was silencing the sound of our feet. Dark. Darker. Yet darker.";
        paragraphs[1].innerHTML= "Are we going the wrong way?";
        hiddenText[0].innerHTML="Sometimes, it pays to stay steadfast in your decision.";
        hiddenText[0].style.color="#111"
        buttonLeft.innerHTML="Yes. Try and find the right direction.";
        buttonRight.innerHTML="No. Continue in the same direction.";
        buttonRight.style.display="inline";
    }else if(page==7){
       page=601;
        title[0].innerHTML= "CYOA: Turned Back";
        background.style.backgroundColor="#222"
        pageName[0].innerHTML= "Lighter"
        paragraphs[0].innerHTML= "As we attempted to find the direction that we lost what seems like so long ago, the hallway seems to get less intense, the light returning to our eyes, our footsteps becoming more certain as we continue on our path.";
        paragraphs[1].innerHTML= "";
        hiddenText[0].innerHTML="Sometimes, it pays to change your mind. The light leads to the tool.";
        hiddenText[0].style.color="#222"
        buttonLeft.innerHTML="Proceed.";
        buttonRight.style.display="none";
    }else if(page==601){
       page=2;
        title[0].innerHTML= "CYOA: Turned Back";
        background.style.backgroundColor="#444"
        pageName[0].innerHTML= "Crossroads"
        paragraphs[0].innerHTML= "Walking towards the light, we are met with a familiar sight. The same crossroads that we once took the dark path into is in front of us yet again.";
        paragraphs[1].innerHTML= " Yet again we are met with a choice.";
        hiddenText[0].innerHTML="The light leads to the tool. Embracing both is key, however.";
        hiddenText[0].style.color="#444"
        buttonLeft.innerHTML="Walk back into the darkness";
        buttonRight.innerHTML="Walk into the light";
        buttonRight.style.display="inline";
    };
});
buttonRight.addEventListener("click", function() {
    if(page==1){
       page=5;
        title[0].innerHTML= "CYOA: Waiting";
        pageName[0].innerHTML= "Waiting"
        paragraphs[0].innerHTML= "We wait, and we wait, and we wait. Seconds become minutes, minutes turn to years, and years to millenia, yet the walls still persist.";
        paragraphs[1].innerHTML= "The iron shackles which once hung to our wrists rust away, the once powerful metal now turning to dust around our wrists, and yet the walls still persist. Aeons pass, or perhaps eternities, and yet the walls. Still. Persist";
        remove.style.display="none";
        hiddenText[0].innerHTML="What a waste of time. Only one option ever existed.";
        buttonLeft.innerHTML="Look for a way out";
        buttonRight.style.display="none";
    }else if(page==2){
       page=21;
        title[0].innerHTML= "CYOA: Brightness";
        background.style.backgroundColor="#777"
        pageName[0].innerHTML= "Light"
        paragraphs[0].innerHTML= "Deciding to enter the lighter corridor, we move, confident in our steps. The light is comforting, yet it seems to grow in luminance with every step we take. Our eyes adjust to the overwhelming brightness as we continue.";
        paragraphs[1].innerHTML= "";
        hiddenText[0].innerHTML="Without dark, light is unappreciated, but without light, darkness is overwhelming. Find the tool.";
        hiddenText[0].style.color="#777"
        buttonLeft.style.display="none";
        buttonRight.style.display="inline";
        buttonRight.innerHTML="Push further into the light.";
    }else if(page==21){
       page=22;
        title[0].innerHTML= "CYOA: Brightness";
        background.style.backgroundColor="#AAA"
        pageName[0].innerHTML= "Lighter"
        pageName[0].style.color="#000";
        paragraphs[0].style.color="#000";
        paragraphs[1].style.color="#000";
        paragraphs[0].innerHTML= "Further and further into the light we walk, our eyes beginning to hurt from the sheer brightness of the hallway. The walls themselves seem to exude light, and the air itself begins to heat up from the amount of heat the light produces.";
        paragraphs[1].innerHTML= "";
        hiddenText[0].innerHTML="With light comes heat, but resolve is always tested when closer to the goal.";
        hiddenText[0].style.color="#AAA"
        buttonRight.innerHTML="Continue on our path.";
    }else if(page==22){
       page=15;
        title[0].innerHTML= "CYOA: Brightness";
        background.style.backgroundColor="#FFF"
        pageName[0].innerHTML= "Yet Lighter."
        pageName[0].style.color="#000";
        paragraphs[0].style.color="#000";
        paragraphs[1].style.color="#000";
        paragraphs[0].innerHTML= "The heat is beginning to be unbearable, as our eyes seem to always be open, our retinas burning from the act of processing all this light. A roar is heard from something close by.";
        paragraphs[1].innerHTML= "A creature, fur as white as the light around us, appears in front of us. What should we do?";
        hiddenText[0].innerHTML="The creature is too large to fight head-on. Sneak around it.";
        hiddenText[0].style.color="#FFF"
        buttonLeft.style.display="inline";
        buttonLeft.innerHTML="Attempt to sneak past it.";
        buttonRight.innerHTML="Stand our ground and fight.";
    };
});
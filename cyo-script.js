//This variable measures the adventure's "Page", determining what choices can be made.
let page=1;
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
        buttonRight.innerHTML="Walk into the light (Doesn't work yet)";
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
        hiddenText[0].innerHTML="Steel your resolve. Darkness is as common as the light.";
        hiddenText[0].style.color="#222"
        buttonLeft.innerHTML="Walk further into the dark.";
    }else if(page==12){
       page=7;
        title[0].innerHTML= "CYOA: Darkness";
        background.style.backgroundColor="#111"
        pageName[0].innerHTML= "Yet Darker"
        paragraphs[0].innerHTML= "Traveling yet further down this hallway, it seems to get even darker. It's all pitch-black. We can't even tell if our eyes are open or closed at this point. Even our footsteps seem to sound unsure, as if the darkness itself was silencing the sound of our feet. Dark. Darker. Yet darker.";
        paragraphs[1].innerHTML= "";
        hiddenText[0].innerHTML="Focus on the truths. The only thing hiding in the dark is your own imagination.";
        hiddenText[0].style.color="#111"
        buttonLeft.innerHTML="Proceed.";
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
    };
});

/******************************************************************************* 
*************************  toggle rules box visible or hidden ******************
********************************************************************************/

var rulesBtn = document.querySelector(".rules-btn");
var rules = document.querySelector(".rl-hid");
var x = document.querySelector(".x");
var xOne = document.querySelector(".x-one");
var xTwo = document.querySelector(".x-two");
var rl = document.querySelector(".rl");
var timerId;


function showRules() {
    rules.classList.add("rl-vis", "blur");
    rulesBtn.classList.add("blur");
    rules.classList.remove("rl-hid");
    console.log("clicked is true");
    xFlash();
}

function hideRules() {
    rules.classList.remove("rl-vis");
    rules.classList.add("rl-hid");
    rulesBtn.classList.remove("blur");
    console.log("clicked is false");
    stopFlash();
}

x.addEventListener("click", hideRules);
rulesBtn.addEventListener("click", showRules);

//make x flash black and aquamarine. try generally first, then try only when mouse is inside rules box


var aqua = "rgb(127, 255, 212)";
var black = "#000";

function xFlash() {
    timerId = setInterval(function(){
        setTimeout(function(){
            x.setAttribute("stroke", aqua);
        }, 50);
        setTimeout(function(){
            x.setAttribute("stroke", black);
        }, 100)
    }, 100);
}


function stopFlash() {
    clearInterval(timerId);
}

/////////// OMG FUCK YEAH IT WORKS
//////just had to put the timerId variable on the settimeout function, NOT the xflash function!
///// timerId = xflash was just returning the whole function.
/////timerId = setTimeout... returned the interval id. yay!
////////weird thing though... I thought that i would not be able to call the timerID variable outside the function
////OH LOL ACTUALLY JUST GOT IT it's because I initialised it outside the function(top of page)
/////if it was initialised insde the function, it wouldn't work. let's try...
//////YES I WAS RIGHT returns an error saying timerId is not defined. yewwww smart bitch





/******************************************************************************* 
******************************  calculate random score *************************
********************************************************************************/

var calcBtn = document.querySelector(".calc");

// function getNameOne() {
//     return(document.querySelector(".name-one").value);
// }

// calcBtn.addEventListener("click", getNameOne);

var nOne;
var nTwo;
var score = Math.floor(Math.random() * 100);
var res = document.querySelector(".res");

function giveResult() {
    calcBtn.addEventListener("click", function() {
        nOne = document.querySelector("#name-one").value;
        nTwo = document.querySelector("#name-two").value;
        console.log(nOne + " and " + nTwo + " have " + score + "% chance of lurrrve");
        res.classList.remove("res-hid");
        res.innerHTML = nOne + " and " + nTwo + " have " + score + "% chance of lurrrve";
    })
}

giveResult();

/******************************************************************************* 
********************************  make result pop up ***************************
********************************************************************************/

//ok so to do this we have to add a new div that is hidden until click (maybe with a timer delay?)
//and some fun animation of where it comes up from.
//maybe it's heart shaped and it pops up from the calc btn, hearts floating out around it, and it beats
//like a heart as it sits there?
//sit div on top of btn, hidden.  



/******************************************************************************* 
********************************  make restart button **************************
********************************************************************************/

//to do this do i maybe need to put everything in a loadpage function and then on click restart run function again?
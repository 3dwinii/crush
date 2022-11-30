
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

var clicked = false;

function showRules() {
    rules.classList.add("rl-vis", "blur");
    rulesBtn.classList.add("blur");
    rules.classList.remove("rl-hid");
    clicked = true;
    console.log("clicked is true");
    xFlash();
}

function hideRules() {
    rules.classList.remove("rl-vis");
    rules.classList.add("rl-hid");
    rulesBtn.classList.remove("blur");
    clicked = false;
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
            console.log("aqua")
        }, 50);
        setTimeout(function(){
            x.setAttribute("stroke", black);
            console.log("black")
        }, 100)
    }, 100);
   console.log(timerId);
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

var loveScore = Math.floor(Math.random() * 100);

var nameOne = document.querySelector(".name-one").value;
var nameTwo = document.querySelector(".name-two").value;
var calcBtn = document.querySelector(".calc");

function calcLove() {
    calcBtn.addEventListener("click", function(){
        console.log(nameOne + " and " + nameTwo + " have " + loveScore + "% chance of forming a committed and loving lifelong bond.")
    });
}

calcLove();
console.log(nameOne)
console.log



//ok I guess what's gotta happen here is text is input in both fields, then when the button is pressed it 
///saves both inputs. THEN it runs the inputs through the formula, THEN it returns the statement.
//but first we need to isolate the two text inputs.

//actyally, here we are just giving the two names a random number. the names don't matter, they will just 
//be used as values in the returned statement.
//still we need to isolate them first.

//try this... add event listener that when calc button is clicked it returns the value of the input field




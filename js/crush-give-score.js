
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



/******************************************************************************* 
********  use pythagorean numerology to generate numbers for each name *********
********************************************************************************/



var nArray = []; //empty array that will fill with each letter's num value
var newNum;
var newArr;


//this function gives the numerical value for each letter and pushes the number onto
//nArray array
//letter converter - input letters

function lConv(ll) {
    if (ll == "a" || ll == "j" || ll == "s") {
        nArray.push(1);
    } else if (ll == "b" || ll == "k" || ll == "t") {
        nArray.push(2);
    } else if (ll == "c" || ll == "l" || ll == "u") {
        nArray.push(3);
    } else if (ll == "d" || ll == "m" || ll == "v") {
        nArray.push(4)
    } else if (ll == "e" || ll == "n" || ll == "w") {
        nArray.push(5);
    } else if (ll == "f" || ll == "o" || ll == "x") {
        nArray.push(6);
    } else if (ll == "g" || ll == "p" || ll == "y") {
        nArray.push(7);
    } else if (ll == "h" || ll == "q" || ll == "z") {
        nArray.push(8)
    } else if (ll == "i" || ll == "r") {
        nArray.push(9);
    }
}

//this for loop runs through each slice position of the name (i.e. each letter)
//and runs the letter through lConv function. loop stops at last letter.
//input for this is the written name. 

function convName(nn){
    for (let i = 0; i < nn.length; i++){
        lConv(nn.slice(i,(i + 1)));
    }
}

/******************************************************************************* 
***************************  add up letters of name ****************************
********************************************************************************/


//this function adds all numbers in a given array and adds the value to the newNum var. returns newNum.
function add(arr) {
    newNum = 0
    for (i = 0; i < arr.length; i++) {
        newNum += arr[i];
    }
    return(newNum);
}

//this function turns number into array. function works.
function toArray(num) {
    newArr = []
    num = num.toString();
    for (i = 0; i < num.length; i++) {
        newArr.push(num.slice(i, i + 1));
    }
    return(newArr);
}

//this function is used when the number is down to 2 digits.
//turns both items in array into integers, adds them, returns a number (newNum).
function addTwo(arr){
    newNum = parseInt(arr[0]) + parseInt(arr[1]);
    return(newNum);
}

function clear() {
    newNum = null;
    newArr = null;
}


//doIt is to calculate a given name's number. pass in the name.
function doIt(input) {
    newNum = 0;
    newArr = 0;
    nArray = [];
    convName(input); //turns the name into array.
    add(nArray); //adds up items in array. returns number.

    if (newNum < 10) { //check number
        console.log(newNum);
        return(newNum); //if number under 10, return.
    } else {
        toArray(newNum); //if number over 10, pass number through toArray function. returns an array (newArr)
        addTwo(newArr); //pass newArr through addTwo fn. this adds 2 items and returns a number.
        if (newNum < 10) {
            console.log(newNum);
            return(newNum);
        } else {
            toArray(newNum);
            addTwo(newArr);
            console.log(newNum);
            return(newNum);
        }
     }
}





/******************************************************************************* 
*************************  return users name and num ***************************
********************************************************************************/

//on click of calcbtn, run doit and add a function that writes the result in the pop up window.

//vars of calcbtn and input result
var calcBtn = document.querySelector(".calc");
var result = document.querySelector(".res");
var resTop = document.querySelector(".resTop");
var resBot = document.querySelector(".resBot");
var restartBtn = document.querySelector(".restart");
var inputNameOne = document.querySelector("#name-one");
var inputNameTwo = document.querySelector("#name-two");
var nameOneNum;
var nameTwoNum;

//this takes the value of the first input box, runs it through doIt, sets the value of
//nameOneNum to the given value of newNum from doIt, returns nameOneNum.
function resultOne(input) {
    doIt(input);
    nameOneNum = newNum;
    console.log(nameOneNum);
    console.log("newNum is " + newNum + ", newArr is " + newArr);
    return(nameOneNum);
}

//same function as above but takes value of second input.
//there is def a better way to do this with only one function, not sure how tho??
function resultTwo(input) {
    doIt(input);
    nameTwoNum = newNum;
    console.log(nameTwoNum);
    return(nameTwoNum);
}

//this function runs both result functions, makes pop up visible and adds result message to pop up.
function post() {
    calcBtn.addEventListener("click", function () {
        resultOne(inputNameOne.value);
        resultTwo(inputNameTwo.value);
        result.classList.remove("res-hid");
        resTop.innerHTML = inputNameOne.value + "'s number is " + nameOneNum + "<br>&<br>" + inputNameTwo.value + "'s number is " + nameTwoNum;
        setComp(nameOneNum, nameTwoNum);
        restartBtn.addEventListener("click", restart)
    });
}

post();


/******************************************************************************* 
**************************  get compatability score ****************************
********************************************************************************/

//formula is according to 2's feelings toward 1
//values are from a chart on namevibrations.com

//these functions put one of 3 statements in resbot
function fr() {
    resBot.innerHTML = "this means<br>yayyy you can be friends";
}

function en() {
    resBot.innerHTML = "this means<br>nooo sorry they hate you :(";
}

function ne() {
    resBot.innerHTML = "this means<br>yeah... it's quiet";
}

function setComp(a, b) {

    calcBtn.addEventListener("click", function() {

        a = nameOneNum;
        b = nameTwoNum;

        //set variables with a and b values
        //user input 2 values
        let b1 = b == 1;
        let b2 = b == 2;
        let b3 = b == 3;
        let b4 = b == 4;
        let b5 = b == 5;
        let b6 = b == 6;
        let b7 = b == 7;
        let b8 = b == 8;
        let b9 = b == 9;
    
       // user input 1 values
        let a1 = a == 1;
        let a2 = a == 2;
        let a3 = a == 3;
        let a4 = a == 4;
        let a5 = a == 5;
        let a6 = a == 6;
        let a7 = a == 7;
        let a8 = a == 8;
        let a9 = a == 9;


        if ((b1 && a2) || (b1 && a3) || (b1 && a9) || (b1 && a7)) {
            fr();
        } else if ((b1 && a4) || (b1 && a6) || (b1 && a8)) {
            en();
        } else if (b1 && a5) {
            ne();
        } else if ((b2 && a1) || (b2 && a3) || (b2 && a7)) {
            fr();
        } else if ((b2 && a5) || (b2 && a4)) {
            en();
        } else if ((b2 && a6) || (b2 && a8) || (b2 && a9)) {
            ne();
        } else if ((b3 && a1) || (b3 && a2) || (b3 && a9) || (b3 && a7)) {
            fr();
        } else if ((b3 && a5) || (b3 && a6)) {
            en();
        } else if ((b3 && a8) || (b3 && a4)) {
            ne();
        } else if ((b4 && a5) || (b4 && a6) || (b4 && a8) || (b4 && a7)) {
            fr();
        } else if ((b4 && a1) || (b4 && a2) || (b4 && a9)) {
            en();
        } else if (b4 && a3) {
            ne();
        } else if ((b5 && a1) || (b5 && a4) || (b5 && a6) || (b5 && a7)) {
            fr();
        } else if (b5 && a2) {
            en();
        } else if ((b5 && a9) || (b5 && a3) || (b5 && a8)) {
            ne();
        } else if ((b6 && a4) || (b6 && a5) || (b6 && a8) || (b6 && a7)) {
            fr();
        } else if ((b6 && a1) || (b6 && a2)) {
            en();
        } else if ((b6 && a3) || (b6 && a9)) {
            ne();
        } else if ((b7 && a8) || (b7 && a6) || (b7 && a5) || (b7 && a7)) {
            fr();
        } else if ((b7 && a1) || (b7 && a2) || (b7 && a9)) {
            en();
        } else if (b7 && a3) {
            ne();
        } else if ((b8 && a4) || (b8 && a5) || (b8 && a6) || (b8 && a7)) {
            fr();
        } else if ((b8 && a1) || (b8 && a2) || (b8 && a9)) {
            en();
        } else if (b8 && a3) {
            ne();
        } else if ((b9 && a1) || (b9 && a2) || (b9 && a3) || (b9 && a7)) {
            fr();
        } else if ((b9 && a5) || (b9 && a4)) {
            en();
        } else if ((b9 && a6) || (b9 && a8)) {
            ne();
        } else {
            console.log("lollll fail")
        }

    })

}

setComp(nameOneNum, nameTwoNum);


//make message pop up in resBot var (lower span on res div)

/******************************************************************************* 
****************************  make restart button ******************************
********************************************************************************/

//how to?
//add a btn in html labelled start again
//trigger a function that basically reloads the whole page.
//maybe I will have to wrap the entire doIt and post functions in a onload function? then 
//call it again on restart button?

//nah, don't actually need the whole page to reload
//just need result div to hide  and values to be reset

function restart() {
    inputNameOne.value = "";
    inputNameTwo.value = "";
    result.classList.add("res-hid");
}
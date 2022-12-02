
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



var namee = "edwina"; //example name. this will be deleted and name taken from user input field.
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


//so you have an array. you add all the numbers of the array and get a new number.
//you turn the number into a string. turn this into an array.
//add up the array. get a new number. turn into string. turn this into an array.
//add up the array. get a new number. turn into string. turn this into an array.
//etc. until the number is below 10. if the number is not below 10, it gets turned into a string/ array.




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


//doIt is to calculate a given name's number. pass in the name.
function doIt(input) {
    convName(input); //turns the name into array.
    add(nArray); //adds up items in array. returns number.

    if (newNum < 10) { //check number
        return(newNum); //if number under 10, return.
    } else {
        toArray(newNum); //if number over 10, pass number through toArray function. returns an array (newArr)
        addTwo(newArr); //pass newArr through addTwo fn. this adds 2 items and returns a number.
        if (newNum < 10) {
            return(newNum);
        } else {
            toArray(newNum);
            addTwo(newArr);
            return(newNum);
        }
     }
}




// doIt(namee);

/******************************************************************************* 
*************************  return users name and num ***************************
********************************************************************************/

//on click of calcbtn, run doit and add a function that writes the result in the pop up window.

//vars of calcbtn and input result
var calcBtn = document.querySelector(".calc");
var result = document.querySelector(".res");
var inputNameOne = document.querySelector("#name-one");
var inputNameTwo = document.querySelector("#name-two");
var nameOneNum;
var nameTwoNum;

function resultOne(input) {
    doIt(input);
    nameOneNum = newNum;
    return(nameOneNum);
}

function resultTwo(input) {
    doIt(input);
    nameTwoNum = newNum;
    return(nameTwoNum);
}

function post() {
    calcBtn.addEventListener("click", function () {
        resultOne(inputNameOne.value);
        resultTwo(inputNameTwo.value);
        result.classList.remove("res-hid");
        result.innerHTML = inputNameOne.value + "'s number is " + nameOneNum + "<br>" + inputNameTwo.value + "'s number is " + nameTwoNum
        console.log("okkkk so final result is, " + inputNameOne.value + "'s number is " + nameOneNum + " and " + inputNameTwo.value + "'s number is " + nameTwoNum);
    });
}

post();

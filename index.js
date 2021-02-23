// Write all your code in this file

// blå ram
function setBlueBorder() {
    let x = document.getElementById("aa");
    x.style.border = "solid 5px blue";
}

// röd ram
function setRedBorder() {
    let x = document.getElementById("bb");
    x.style.border = "solid 5px red";
}

// toggla bakgrund
let toggle = false;
function toggleMintBackground() {
    let x = document.getElementById("cc");
    toggle = !toggle;
    x.style.backgroundColor = toggle ? "#c7ffe0" : "transparent";
}

// level 2
    let box = document.getElementById("dd");
    let myDiv = document.getElementById("ee");
   

    let btnCounterClockwise = document.createElement("button");
    let btnClockwise = document.createElement("button");
    
    
    let counterClockwise = document.createTextNode("rotate counter-clockwise");
    let clockwise = document.createTextNode("rotate clockwise");
   
    
    btnCounterClockwise.appendChild(counterClockwise);
    btnClockwise.appendChild(clockwise);
    
    myDiv.appendChild(btnCounterClockwise);
    myDiv.appendChild(btnClockwise);  
    
    btnCounterClockwise.onclick = function(){rotateCounterClockwise()};
    btnClockwise.onclick = function(){rotateClockwise()};
    
    let rotateCCW = -45;
    let rotateCW = 45;

    function rotateCounterClockwise() {
        box.style = 'transform: rotate(' + rotateCCW + 'deg)';
        rotateCCW += -45;
    }

    function rotateClockwise() {
        box.style = 'transform: rotate(' + rotateCW + 'deg)';
        rotateCW += 45;
    }

    

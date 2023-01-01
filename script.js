var passengers = 0;
const passengersPrev =[passengers];
function incrementNumPassengers() {
    passengers = passengers + 1;
    if(passengers > 10) {
        alert("maximum number of passengers for station reached");
        passengers = 10;
    }
    document.getElementById("numCurrent").innerText = passengers;
}

function decrement() {
    passengers = passengers -1;
    if(passengers < 0) {
        alert("invalid input");
        passengers = 0;
    }
    document.getElementById("numCurrent").innerText=passengers;
}

function reset() {
    passengers = 0;
    document.getElementById("numCurrent").innerText = 0;
    document.getElementById("saved").innerHTML = "";
}
z
function save() {
    var saved = passengers;
    document.getElementById("saved").innerText = saved;
    passengersPrev.push(saved);
}

function log() {
    var outputHTML = "";
    for(var i = 1; i < passengersPrev.length; i++) {
        outputHTML += passengersPrev[i] + ", ";
    }
    document.getElementById("prevNumIndx").innerHTML = outputHTML;
}

function sum() {
    var outputHTML = "";
    var total = 0;
    for(var i = 1; i < passengersPrev.length; i++) {
        total+=passengersPrev[i];
    }

    outputHTML += total;
    document.getElementById("sum").innerHTML = outputHTML;
}

const items = [''];

function addItem() {
    var listInput = document.getElementById("listInput").value;
    var outputHTML = "";
    
    if ( /* !items.includes(listInput) && */ listInput != "") {
        items.push(listInput);
        for (var i = 1; i < items.length; i++) {
            outputHTML += items[i] + "<br>";
        }
    }
    document.getElementById("listInput").value = "";
    document.getElementById("listItem").innerHTML = outputHTML;

}
function clearItems() {
    document.getElementById("listItem").innerHTML = "";
    items.length = 0;
    addItem();
}

// function checkOff() {
//     const index = items.indexOf(document.getElementById("listItem").value);
//     alert("removing " + document.getElementById("listItem").innerText);
//     items.splice(index, 1);
// }
function alertButton(){
    alert("Hello world!");
}

function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}
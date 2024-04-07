let txtContentStore1 = "";
let txtContentStore2 = "";

function handleFileSelectStore1(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        txtContentStore1 = e.target.result;
    };
    reader.readAsText(file);
}

function handleFileSelectStore2(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        txtContentStore2 = e.target.result;
    };
    reader.readAsText(file);
}

function searchNumber() {
    var userInput = parseInt(document.getElementById("searchBox").value);
    var numbersStore1 = txtContentStore1.split("\n").map(num => parseInt(num.trim()));
    var numbersStore2 = txtContentStore2.split("\n").map(num => parseInt(num.trim()));

    var foundStore1 = numbersStore1.includes(userInput);
    var foundStore2 = numbersStore2.includes(userInput);

    if (foundStore1 && foundStore2) {
        document.getElementById("matchButtonStore1").style.display = "inline-block";
        document.getElementById("matchButtonStore2").style.display = "inline-block";
        document.getElementById("matchButtonStore1").style.backgroundColor = "blue";
        document.getElementById("matchButtonStore2").style.backgroundColor = "green";
    } else if (foundStore1) {
        document.getElementById("matchButtonStore1").style.display = "inline-block";
        document.getElementById("matchButtonStore2").style.display = "none";
        document.getElementById("matchButtonStore1").style.backgroundColor = "blue";
    } else if (foundStore2) {
        document.getElementById("matchButtonStore2").style.display = "inline-block";
        document.getElementById("matchButtonStore1").style.display = "none";
        document.getElementById("matchButtonStore2").style.backgroundColor = "green";
    } else {
        document.getElementById("searchBox").value = "";
        document.getElementById("matchButtonStore1").style.display = "none";
        document.getElementById("matchButtonStore2").style.display = "none";
    }
}

function acknowledge() {
    document.getElementById("searchBox").value = "";
    document.getElementById("matchButtonStore1").style.display = "none";
    document.getElementById("matchButtonStore2").style.display = "none";
    document.getElementById("searchBox").focus();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchBox").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchNumber();
        }
    });

    document.getElementById("searchButton").addEventListener("click", function() {
        searchNumber();
    });

    document.getElementById("txtFileStore1").addEventListener("change", function(event) {
        handleFileSelectStore1(event);
    });

    document.getElementById("txtFileStore2").addEventListener("change", function(event) {
        handleFileSelectStore2(event);
    });

    document.getElementById("matchButtonStore1").addEventListener("click", function() {
        acknowledge();
    });

    document.getElementById("matchButtonStore2").addEventListener("click", function() {
        acknowledge();
    });

    document.getElementById("matchButtonStore1").style.display = "none";
    document.getElementById("matchButtonStore2").style.display = "none";
});

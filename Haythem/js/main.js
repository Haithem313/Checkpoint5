function gras(event) {
    event.preventDefault();
    var getText = document.getElementById("myText");
    if (getText.style.fontWeight == "bold") {
        getText.style.fontWeight = "normal";
    }
    else {
        getText.style.fontWeight = "bold";
    }

}

function ital(event) {
    event.preventDefault();
    var getText = document.getElementById("myText");
    if (getText.style.fontStyle == "italic") {
        getText.style.fontStyle = "normal";
    }
    else {
        getText.style.fontStyle = "italic";
    }

}

function under(event) {
    event.preventDefault();
    var getText = document.getElementById("myText");
    if (getText.style.textDecoration == "underline") {
        getText.style.textDecoration = "none";
    }
    else {
        getText.style.textDecoration = "underline";
    }

}

/*function changefont() {
    var getText = document.getElementById("myText");
    if 

}*/

function changesize(event) {
    event.preventDefault();
    document.getElementById("myText").style.fontSize = document.getElementById('size').value;
}

function changefont(event) {
    event.preventDefault();
    document.getElementById("myText").style.fontFamily = document.getElementById('fonte').value;
}


// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function disabledElement() {
    document.getElementById("two-element").disabled = true;
}
function enable() {
	document.getElementById("two-element").disabled = false;
}

function likeFunction(x) {
    x.classList.toggle("active");
}
function dislikeFunction(y) {
    y.classList.toggle("active");
    /*if (y.style.transform === "rotate(180deg)") {
    y.style.transform= "rotate(0deg)";
    } else {
    y.style.transform= "rotate(180deg)";
    }*/
    
}
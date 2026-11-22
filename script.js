
const buttonST = document.getElementById("buttonST");

buttonST.addEventListener("click", function() {
    window.open(
        "https://jamiehwangblack.bigcartel.com/",
        "_blank",
        "noopener,noreferrer"
    );
});

const buttonAB = document.getElementById("buttonAB");

buttonAB.addEventListener("click", function() {
    window.location.href = "about.html";
});

const buttonJO = document.getElementById("buttonJO");

buttonJO.addEventListener("click", function() {
    window.location.href = "journal/index.html";
});
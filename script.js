
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
    window.open(
        "https://jamiehwangblack.bigcartel.com/about-me",
        "_blank",
        "noopener,noreferrer"
    );
});

const buttonJO = document.getElementById("buttonJO");

buttonJO.addEventListener("click", function() {
    document.getElementById("artworks").style.display = "none";
    document.getElementById("journalLogs").style.display = "block";
});

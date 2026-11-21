window.onload = function() {
    document.getElementById("journalLogs").style.display = "none"; 
};

const buttonST = document.getElementById("buttonST");

buttonST.addEventListener("click", function() {
    window.open("https://www.jamiehwangblack.com", "_blank");
});

const buttonAB = document.getElementById("buttonAB");

buttonAB.addEventListener("click", function() {
    window.open("https://www.jamiehwangblack.com/about-me", "_blank");
});

const buttonJO = document.getElementById("buttonJO");

function showLogs(){
         document.getElementById("artworks").style.display = "none"; 
        document.getElementById("journalLogs").style.display = "block"; 
}
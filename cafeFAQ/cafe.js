var bouton = document.getElementById("button");
var deuxieme = document.getElementById("secondbtn")
var ligneblanche = document.getElementById("ligneblanche");
var lignegrise = document.getElementById("lignegrise")

lignegrise.style.display = "none";


bouton.addEventListener("click", function(){
   
    if (lignegrise.style.display === "none") {
        lignegrise.style.display = "flex";
        bouton.innerText = "-"
        
    }
    else {lignegrise.style.display = "none"
    bouton.innerText = "+"
}

})


lignegrisedeux.style.display = "none";

var lignedeux = document.getElementById("lignegrisedeux")
deuxieme.addEventListener("click", function(){

    if (lignegrisedeux.style.display === "none") {
        lignegrisedeux.style.display = "flex";
        deuxieme.innerText = "-";

        
    }
    else {lignegrisedeux.style.display = "none";
    deuxieme.innerText = "+";     
}
})



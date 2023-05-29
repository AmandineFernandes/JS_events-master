//////////Fontionnalité 1//////////
let x = 1;

const footer = document.querySelector("footer");

//ajoute un écouteur d'événements de clic à cet élément en utilisant addEventListener("click", ...)
footer.addEventListener("click", function(){ 
    //incrémentation de +1 à chaque clic placée à l'intérieur de la fonction de rappel de l'évènement de clic
    x++; 
    console.log("clique numéro" + x);
});






              
  
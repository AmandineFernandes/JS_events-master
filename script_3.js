//////////Fontionnalité 3//////////
document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector("body > main > div > div > div > div:nth-child(1) > div");
    const buttonEdit = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");
              
    // Affiche la première card dans la console pour confirmer qu'elle est bien pointée
    console.log(card);
              
    // Affiche le bouton "Edit" de la première card dans la console pour confirmer qu'il est bien pointé
    console.log(buttonEdit);
              
    // Ajoute un écouteur d'événement au bouton "Edit"
    buttonEdit.addEventListener("click", function() {
    // Change la couleur du texte de la card en rouge
    buttonEdit.style.color = "red";
 });
});




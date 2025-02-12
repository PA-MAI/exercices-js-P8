// sélectionne l'affichage de la calculatrice
const display = document.getElementById("display");

// ajoute une valeur au champ d'affichage
function appendToDisplay(value) {
    display.value += value;
}

// éfface complètement l'affichage
function clearDisplay() {
    display.value = "";
}

// affiche le résultat
function calculateResult() {
    display.value = eval(display.value); 
}
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
    try {
        let expression = display.value;

        // Vérifie la division par zéro
        if (display.value.includes("/0")) {
            display.value = "Erreur";
            return;
        }

        // Vérifie présence de 2 opérateurs consécutifs
        if (/[\+\-\*\/]{2,}/.test(expression)) {
            display.value = "Erreur";
            return;
        }

        // Évalue l'expression si elle est valide
        display.value = eval(expression);
    } catch (error) {
        display.value = "Erreur";
    }
}
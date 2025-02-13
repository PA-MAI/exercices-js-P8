function convertToBinary() {
    let inputField = document.getElementById("decimalInput");
    let resultField = document.getElementById("binaryResult");
    let inputValue = inputField.value.trim();

    // Vérification avec RegExp : uniquement chiffres et un point valide
    if (!/^\d+(\.\d+)?$/.test(inputValue)) {
        resultField.textContent = "Erreur : Entrez un nombre valide (ex: 10 ou 10.5)";
        return;
    }

    let decimal = parseFloat(inputValue);
    // Tronque la partie décimale
    let entier = decimal | 0;  
    let fraction = decimal - entier;

    // Conversion de la partie entière
    let binaryInt = "";
    while (entier > 0) {
        binaryInt = (entier % 2) + binaryInt;
        entier = (entier / 2) | 0;
    }
    binaryInt = binaryInt || "0";

    // Conversion de la partie fractionnaire
    let binaryFraction = "";
    let precision = 10;
    while (fraction > 0 && precision > 0) {
        fraction *= 2;
        binaryFraction += (fraction | 0);
        fraction -= (fraction | 0);
        precision--;
    }

    // Affichage du résultat
    resultField.textContent = binaryFraction ? `${binaryInt}.${binaryFraction}` : binaryInt;
}
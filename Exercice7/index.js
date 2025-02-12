function convertToBinary() {
    let decimal = parseInt(document.getElementById("decimalInput").value);
    let binary = "";

    // Conversion en binaire en utilisant % et /
    while (decimal > 0) {
        // Prend le reste et le place à gauche
        binary = (decimal % 2) + binary; 
        // Divise le nombre restant par 2
        decimal = decimal / 2 | 0; 
    }
    //Résultat
    document.getElementById("binaryResult").textContent = binary || "0";
}
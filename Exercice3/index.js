// Créez votre fonction ici
function calculateAverage(a = [], f) {
    // Retourne un message si le tableau est vide
    if (a.length === 0) {
        return "No numbers to calculate average";
    }

    f = f || function(n) { return n; };  
    
    var b = a.length,
        c = 0, i;

    for (i = 0; i < b; i++) {
        c += Number(f(a[i]));
    }

    return c / b;
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage

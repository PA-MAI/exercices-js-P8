function pairNumbers(min, max) {
    let result = '';
    
    for (let i = min; i <= max; i++) {
        // calcul le reste
        if (i % 2 === 0) {
            // Si premier nombre pair,pas de virgule avant
            if (result !== '') {
             result += ','; 
            }
            result += i; 
        }
    }
   
    return result;
  
}
//let startPairNumber = pairNumbers(1, 10)
//console.log (startPairNumber) 

export default pairNumbers



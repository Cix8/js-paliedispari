let userInput = prompt('Scrivi una parola per verificare se è palindroma');

while (!isNaN(userInput)) {
    alert('Il valore inserito non è una parola, riprova');
    userInput = prompt('Scrivi una parola per verificare se è palindroma');
}

let userResult = isPalindorm(userInput);


/**
 * Description
 * @param {String} word -> is the word to check
 * @returns {String} -> is the inverted word to check if the entered word is palindorm
 */
function isPalindorm(word) {
    let result = '';

    for (let i = userInput.length - 1; i >= 0; i--) {
        result += userInput[i];
        console.log(result); 
    }
    
    if (result === userInput) {
        console.log('La parola inserita è palindroma');
    } else {
        console.log('La parola inserita non è non palindroma');
    }

    return result
}
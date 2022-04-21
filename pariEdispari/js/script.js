let userChoice = prompt('Pari o dispari?');
let userChoiceCheck = userChoice.toLowerCase();

console.log(userChoice, userChoiceCheck);

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

while ((userNumber < 1 || userNumber > 5) || (isNaN(userNumber))) {
    alert('Il numero inserito non è valido');
    userNumber = prompt('Inserisci un numero da 1 a 5');
}

console.log(userNumber, userChoice);

let computerNumber = randomNumber(1,5);
console.log(computerNumber);

let finalResult = oddOrEvenSum(userNumber, computerNumber, userChoice);
console.log(finalResult);

/**
 * Description
 * @param {Number} starting -> is the number from which we start to generate our random number
 * @param {Number} ending -> is the maximum number we can reach by generating our random number
 * @returns {Number} -> is the generated random number
 */
function randomNumber(starting, ending) {
    let result = Math.floor(Math.random() * ending) + starting;
    return result;
}

/**
 * Description
 * @param {Number} num1 -> is the first number, chosen by the user, that we want to add to a second number
 * @param {Number} num2 -> is the second number, randomly generated , that we want to add to the first number
 * @param {String} userChoiceCheck -> is the user choice (odd or even)
 * @returns {String} -> says who wins between the two depending on whether the number resulting from the sum of the 2 previous numbers is odd or even
 */
function oddOrEvenSum(num1, num2, userChoiceCheck) {
    let sum = num1 + num2;
    let result;
    if ((sum % 2 === 0 && userChoiceCheck === 'pari') || (sum % 2 === 1 && userChoiceCheck === 'dispari')) {
        result = 'Il giocatore ha vinto';
    } else {
        result = 'Il computer ha vinto';
    }
    return result;
}
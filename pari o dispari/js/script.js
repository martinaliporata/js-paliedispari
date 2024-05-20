// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Con un prompt chiediamo all'utente pari o dispari e con un altro prompt parseint gli chiediamo un numero da 1 a 5.
// Con la funzione getRandomInt generiamo un numero randomico da 1 a 5 
// Sommiamo il numero random e quello scelto dall'utente con una funzione capiamo se è pari o dispari con if
// Con un if dichiariamo chi ha vinto

let oddOrEven = prompt('Scegli pari o dispari')
while (oddOrEven !== 'pari' && oddOrEven !== 'dispari') {
    oddOrEven = prompt('pari o dispari').trim().toLocaleLowerCase()
}

let userNumber = Number.parseInt(prompt('Scegli un numero da 1 a 5'), 10)
while (Number.isNaN(userNumber)|| (userNumber<1 && userNumber>5)){
    userNumber = Number.parseInt (prompt('Scegli un numero da 1 a 5').trim(), 10)
}

console.log (`L'utente ha scelto $(oddOrEven), e il numero $(userNumber)`)

const aiNumber = getRandomInt(1,5)
const sum = userNumber + aiNumber;

console.log (`Il computer ha generato $(aiNumber), e la somma dei due numeri è $(sum)`)

let result

if(isEven(sum)=== true) {
    result = 'pari';
} else {
    result= 'dispari'
}

if(isEven(sum) === false) {
    result = 'pari';
} else {
    result = 'dispari'
}

if(result===oddOrEven){
    console.log('Utente vince')
} else {
    console.log('Computer vince')
}

function getRandomInt(min,max) {
    const randomNumber = Math.floor(Math.random() * (max - min +1) + min);
    return randomNumber;
}

function isOdd(number) {
    number = number.parseInt(number,10)
    if (number%2===1){
        return true
    } else {
        return false
    }
}

function isEven(number) {
    number = number.parseInt(number,10)
    if (number%2===0){
        return true
    } else {
        return false
    }
}

function pariODispari(numero) {
    if (number%2===1){
        return 'pari'
    } else {
        return 'dispari'
    }
}
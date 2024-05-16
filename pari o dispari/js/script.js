// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Con un prompt chiediamo all'utente pari o dispari e con un altro prompt parseint gli chiediamo un numero da 1 a 5.
// Con la funzione getRandomInt generiamo un numero randomico da 1 a 5 
// Sommiamo il numero random e quello scelto dall'utente con una funzione capiamo se è pari o dispari con if
// Con un if dichiariamo chi ha vinto

const pariDispari = prompt('Scegli pari o dispari')
const userNumber = Number.parseInt(prompt('Scegli un numero da 1 a 5'))

function getRandomInt(min,max) {
    const randomNumber = Math.floor(Math.random() * (max - min +1) + min)
    return randomNumber
}

const numeroRandomico = getRandomInt(1,5)

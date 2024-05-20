// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Con un prompt chiediamo all’utente di inserire una parola
// Una parola è palindroma se, letta al contrario, rimane invariata. 

// correzione
let userWord = prompt('Inserisci una parola');

while (userWord.length < 1) {
    userWord = prompt('Inserisci una parola');
}

isPalindrome(userWord)

function isPalindrome(word) {
    if (word.length === 1) {
        return true;
    } else {
        let reverseWord = '';
        for (let index = word.length -1; index >= 0; index--) {
            console.log(word[index], reverseWord);
            reverseWord += word[index];
        }

        if (reverseWord===word) {
            return true;
        } else {
            return false;
        }
    }
}
console.log('is this palindrome', isPalindrome(userWord))
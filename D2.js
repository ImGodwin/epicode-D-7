/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let algo1 = 10;
let algo2 = 20;

if (algo1 < algo2) {
  console.log(algo1, ": is the lower number");
} else {
  console.log("both numbers are equal");
} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let arr1 = [1, 2, 3, 4, 5, 6];

if (arr1[arr1.length - 1] !== 5) {
  console.log("not equal");
} else {
  console.log("number doesn't exist");
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let a = 10;
let b = 5;

if (a % b === 0) {
  console.log("divisibile per 5");
} else {
  console.log("confirm number");
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let num1 = 3;
let num2 = 5;

if (num1 === 8) {
  console.log("true");
} else if (num1 + num2 === 8) {
  console.log("Both values added is 8");
} else {
  console.log("check addition");
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let customerSpent = 200;
let totalShoppingCart = 50;
let transportation = 10;

if (customerSpent < totalShoppingCart && customerSpent !== totalShoppingCart) {
  console.log("customer will pay" + transportation, +"for transportation");
} else if (customerSpent >= totalShoppingCart) {
  console.log("customer gets free transportation");
} else {
  console.log("calculate goods again");
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let customerSpent = 200;
let totalShoppingCart = 50;
let transportation = 10;
let blackFriday = (20 / customerSpent) * 100;

if (customerSpent < totalShoppingCart && customerSpent !== totalShoppingCart) {
  console.log("customer will pay" + transportation, +"for transportation");
} else if ((customerSpent >= totalShoppingCart) - blackFriday) {
  console.log("customer gets free transportation for black friday sales");
} else {
  console.log("calculate goods again");
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let a = 5;
let b = 10;
let c = 15;
let d = [a, b, c];

if ((a, b, c)) {
  console.log(d.reverse());
} */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let arr1 = [1, 2, "MALE", 4, 5];

if (arr1[2] < 1 && arr1[2] > 9) {
  console.log("this is not a num");
} else {
  console.log(arr1[2]);
} */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let a = 71;
let b = 85;

if (a % b === 0) {
  console.log("Pari");
} else {
  console.log("Dispari");
} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let val = 7
  if (val >= 10) {
      console.log("Uguale a 10 o maggiore");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Meno di 10");
    }  */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}; */

/* SCRIVI QUI LA TUA RISPOSTA */

/* me.city = "Toronto";
console.log(me); */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* delete me.lastName;
console.log(me); */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* delete me.skills[2];
console.log(me); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let arr1 = [];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr1 = arr2; */
//console.log(arr1);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* arr1.pop();
arr1.push(100);
console.log(arr1); */

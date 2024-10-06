/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {

    if (num1 === num2) {

        return (num1 + num2) * 3
    }
    else {
        return num1 + num2
    }
}

console.log(crazySum(3, 8));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(numInt) {

    if ((numInt >= 20 && numInt <= 100) || numInt === 400) {

        return (true);
    }


    else {
        return (false);

    }
}

console.log(boundary(70));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(frase) {

    let fraseSplit = frase.split('');
    console.log(fraseSplit);

    let fraseReverse = fraseSplit.reverse();
    console.log(fraseReverse);

    let fraseJoin = fraseReverse.join('');
    console.log(fraseJoin);

    return fraseJoin
}

console.log(reverseString("EPICODE"));


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(stringa) {

    let stringaSplit = stringa.split(' ')
    console.log(stringaSplit);

    for (let i = 0; i < stringaSplit.length; i++) {
        stringaSplit[i] = stringaSplit[i][0].toUpperCase() + stringaSplit[i].substring(1)


    }
    return stringaSplit.join(' ')


}

console.log(upperFirst("il mitico alessandro barbero"));


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {

    let x = []

    for (i = 0; i < n; i++) {

        x.push(Math.floor(Math.random() * 11))
    }
    return x
}

console.log(giveMeRandom(4));


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {

    return area = (l1 * l2) / 2
}

console.log(area(6, 7));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/




function crazyDiff(results) {

    if (results > 19) {


        return Math.abs(results - 19) * 3
    }

    else {

        console.log(Math.abs(results - 19));

    }

}

console.log(crazyDiff(22));




/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(string) {

    if (string.startsWith("code")) {

        return string
    }

    else {

        return "code" + string
    }
}

console.log(codify("pennarello"));



/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(m) {

    if (m % 3 === 0 || m % 7 === 0) {

        return m = true

    }

    else {
        return m = false
    }
}

console.log(check3and7(32));


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(string) {


   return string.slice(1, -1);

}


console.log(cutString("apnea"));


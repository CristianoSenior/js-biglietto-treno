// Chiedere all'utente età e chilometro che vuole percorrere


// Chiedere all'utente età
var etaUtente = prompt("Buongiorno , quanti anni hai?");


// Chiedere all'utente quanti chilometri vuole percorrere
var kmPercUtente = prompt("quanti km vuoi percorrere?");

// Costo biglietto 0.21€ al km
var costoBigliettoNormale = 0.21 * kmPercUtente;

// Costo biglietto + sconto minorenni

var costoBigliettoBaby = ( costoBigliettoNormale * 100 ) / 120;

// Costo biglietto + sconto terzaetà

var costoBigliettoSaggi = ( costoBigliettoNormale * 100 ) / 140;

console.log("età utente:" + etaUtente);
console.log("km percorsi:" + kmPercUtente);
console.log("costo biglietto normale:" + costoBigliettoNormale);
console.log("costo biglietto piccoli:" + costoBigliettoBaby);
console.log("costo biglietto grandi:" + costoBigliettoSaggi);



if ( etaUtente < 18) {
costoBigliettoNormale = costoBigliettoBaby
}else if (etaUtente > 65){
costoBigliettoNormale = costoBigliettoSaggi
}


  document.getElementById("mio_id").innerHTML = "Il costo del biglietto è " + costoBigliettoNormale;

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
var difficolta;
var controllo = true;
var mine = [];
var vince, perde;
var numeriUte = [];
var n, input;
var mineOrd = [];
var stampa = document.getElementById("flex");
var contenuto = "", j;

// chiedo all'utente di inserire la difficolta'
// con il ciclo while faccio un controllo del numero inserito
while (controllo) {
  difficolta = prompt("scegli la difficolta' tra 0, 1 e 2");
  switch (difficolta) {
    case "2":
    controllo = false;
    n = 50;
    console.log("l'utente ha scelto la difficolta' ",2);
    break;
    case "1":
    controllo = false;
    console.log("l'utente ha scelto la difficolta' ",1);
    n = 80;
    break;
    case "0":
    controllo = false;
    n = 100;
    console.log("l'utente ha scelto la difficolta' ",0);
    break;
    default:
    console.log("Numero non valido");
  }
}
  controllo = true;

  // faccio un ciclo for da 1 a 16
  for (var i = 0; i < 16; i++) {
    // il ciclo while si ripete finche' non viene generato un numero random non presente nell'array
    while (controllo) {
      // genero dei numeri tra 1 e 100
      random = Math.floor(Math.random() * n) + 1;
      // richiamo la mia funzione per non generare numeri doppi
      controllo = ricerca(random, mine);
    }

    // salvo i random nell'array
    mine.push(random);
    controllo = true;
  }
  console.log(mine);


  // // faccio un ciclo che mi generi un prompt (max 100 - 16 volte)
  // vince = 0;
  // perde = true;
  // controllo = true;
  // while ((vince <= 84) && perde) {
  //   // l'utente inserisce un numero per controllare che non sia gia' stato inserito
  //   while (controllo) {
  //     input = parseInt(prompt("inserisci un numero da 1 a " + n));
  //     controllo = ricerca(input, numeriUte);
  //     // controllo se il numero inserito dall'utente e' presente nell'array mine
  //     perde = !ricerca(input, mine);
  //   }

  //   if (perde && (input >= 1 && input <= n)) {
  //     // se perde, vince non viene incrementato
  //     vince++;

  //   }
  //   // faccio un array che tiene traccia dei numeri inseriti dall'utente
  //   numeriUte.push(input);

  //   controllo = true;
  // }
  // console.log(numeriUte);

// OUTPUT
  // se il numero in input e' presente in mine la partita termina e stampo "hai perso"
  // if (perde === false) {
  //   console.log("hai perso");
  // altrimenti stampo "vittoria"
  // } else {
  //   console.log("hai vintoooo!");
  // }
  // stampo il punteggio ottenuto dall'utente
  // console.log("il tuo punteggio e' ", vince, "/" ,n," punti");

  // FUNZIONI
function ricerca(numero, array){
  return array.includes(numero);
}


// *********** PARTE GRAFICA *************

// ordino gli elementi dell'array mine
mineOrd = mine.sort(function(a, b){return a-b});

console.log(mineOrd);

// utilizzo un ciclo for per generare i div celle
j = 0;
for (var i = 1; i <= n; i++) {

  if (i === mineOrd[j]) {
    stampa.innerHTML += "<div class='celle mine'>" + "<p>" + mineOrd[j] + "</p>" + "</div>";
    j++;
  } else {
  stampa.innerHTML += "<div class='celle'>" + "</div>";
  }

}

// metto a ciascun div un numero univoco
$(function(){
  i = 1;
  $('#flex').find('div').each(function(){
    $(this).attr('id', i);
     i++;
  });
});


var elemento = $("div p");
elemento.hide();


// mostra se nella casella c'e una mina o no al click
$( 'div.celle' ).click(function() {
  var somma=0;
  var id = $(this).attr('id');
  console.log(id);
  var classe = $(this).attr('class');
  console.log(classe);
  // se c'e una mina si aprono tutte le caselle che contengono una mina
  if(classe === "celle mine"){
    $( 'p' ).show().addClass( 'mine' ); 
    alert("SEI ESPLOSO!!!");
    controllo=false;
    // altrimenti si apre una casella vuota
  } else {
    $( '#' + id).show().addClass( 'salvo' );
  } 
});


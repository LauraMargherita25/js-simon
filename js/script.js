//creo 5 numeri casuali
// da visualizzare nella pagina
// faccio partire un timer(count down)all'apertura della pagina che fa sparire i numeri dopo 30 sec
// qundo i numeri scompaiono chiedo con prompt i numeri uno alla volta(5 prompt diversi?)
// confronto i numeri inseriti dall'utente con quelli rnd( confronto tra array?)


// creo numero rnd 
let rndNum1 = getRndNum1(1, 100);
console.log("sono rndNum1" + " " + rndNum1);

function getRndNum1(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// creo 5 rndNum

for (let i = 0; i < 5; i++) {
    
    let rndNum5 = getRndNum5(1, 100);
    console.log("siamo rndNum5" + " " + rndNum5);

    function getRndNum5(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}
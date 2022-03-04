//creo 5 numeri casuali
// da visualizzare nella pagina
// faccio partire un timer(count down)all'apertura della pagina che fa sparire i numeri dopo 30 sec
// qundo i numeri scompaiono chiedo con prompt i numeri uno alla volta(5 prompt diversi?)
// confronto i numeri inseriti dall'utente con quelli rnd( confronto tra array?)


// creo numeri rnd 
let rndNum = getRndNum(1, 100);
console.log(rndNum);

function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
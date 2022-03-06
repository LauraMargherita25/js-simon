//creo 5 numeri casuali
// da visualizzare nella pagina
// faccio partire un timer(count down)all'apertura della pagina che fa sparire i numeri dopo 30 sec
// qundo i numeri scompaiono chiedo con prompt i numeri uno alla volta(5 prompt diversi?)
// confronto i numeri inseriti dall'utente con quelli rnd( confronto tra array?)


// creo 5 rndNum

let arrRndNum = []

for (let i = 0; i < 5; i++) {
    
    let rndNum = getRndNum(1, 100);
    
    function getRndNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    console.log("siamo 5 rndNum" + " " + rndNum);
    
    arrRndNum.push(rndNum);

    // inserisci evita doppioni
}
console.log(arrRndNum);


// visualizzo i numeri nella pagina

//let eleContainer = document.getElementById('#container');
const eleBox = document.createElement("div");
eleBox.classList.add("box");
eleBox.innerHTML = (arrRndNum);
//eleContainer.append(eleBox);
document.body.append(eleBox);
//mainContainer.innerHTML(arrRndNum.join(" "));

/*const ele5RndNum = document.createElement("div");
ele5RndNum.classList.add("main_container");
ele5RndNum.innerHTML = arrRndNum;
gridContainer.append(square);*/


/* Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
chiedo all'utente i cinque numeri */

setTimeout(showOffNum, 1000 * 30);

function showOffNum() {
    
    // faccio sparire i numeri
    eleBox.innerHTML = (" Te li ricordi tutti? ");

    // chiedo all'utente i cinque numeri
    for (let i = 0; i < 5; i++) {
        
        /*let eleAddNum = prompt("Inserisci i numeri in ordine uno alla volta?");
        console.log(eleAddNum)
        arrAddNum.push(eleAddNum);*/
        arrAddNum.push(parseInt(prompt('Numero ' + (i+1))));

        // confronto i 5 numeri rnd con i cinque numeri inseriti dall'utente
        if (arrRndNum[i] == arrAddNum[i]){
            console.log("hai vinto");
        }else{
            console.log("hai perso");
        }
    }

}


let arrAddNum = [];

console.log(arrAddNum);


//console.log(arrRndNum.diff(arrAddNum));

//const intersection = arrRndNum.filter(element => arrAddNum.includes(element));


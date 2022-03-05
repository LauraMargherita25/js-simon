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


// faccio sparire i numeri

setTimeout(showOffNum, 1000 * 30);

function showOffNum() {
    //alert("scompari ora");
    eleBox.innerHTML = (" Te li ricordi tutti? ");

    for (let i = 0; i < 5; i++) {
        
        /*let eleAddNum = prompt("Inserisci i numeri in ordine uno alla volta?");
        console.log(eleAddNum)
        arrAddNum.push(eleAddNum);*/
        arrAddNum.push(prompt('Numero ' + (i+1)));
    }
}

// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// chiedo all'utente i cinque numeri

let arrAddNum = [];

// setTimeout(showPrompt, 1000 * 30);

// function showPrompt() {
    
//     for (let i = 0; i < 5; i++) {
        
//         /*let eleAddNum = prompt("Inserisci i numeri in ordine uno alla volta?");
//         console.log(eleAddNum)
//         arrAddNum.push(eleAddNum);*/
//         arrAddNum.push(prompt('Numero ' + (i+1)));
//     }
// }
console.log(arrAddNum);


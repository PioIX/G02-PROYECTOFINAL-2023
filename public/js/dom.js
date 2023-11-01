let casillero = 1


function tirarDado(){
    let valor = Math.floor(Math.random() * 6)+1
    console.log(valor)
    casillero += valor
    if (casillero > 39){
        casillero = casillero % 39
        console.log(casillero)
    }

}

function posicionjugador(){
    

}

function avanzarPosicion(){


}

function retrocederPosicion(){


}
let casillero = 1


function tirarDado(){
    let valor = Math.floor(Math.random() * 6)+1
    console.log(valor)
    casillero += valor
    if (casillero > 44){
        casillero = casillero % 44
        console.log(casillero)
    }

}

function posicionjugador(){
    

}


function chequearPregunta(){
    let tipoPregunta = ""
    let color_casillero = document.getElementById().style.backgroundColor()
    if (color_casillero = 1 ){
        tipoPregunta = "historia"
    }
    else if (color_casillero = 1 ){
        tipoPregunta = "deporte"
    }
    else if (color_casillero = 1 ){
        tipoPregunta = "arte"
    }
    else if (color_casillero = 1 ){
        tipoPregunta = "ciencia"
    }
    else if (color_casillero = 1 ){
        tipoPregunta = "entretenimiento"
    }
    else {
        tipoPregunta = "entretenimiento"
    }


    let data = {
        pregunta : tipoPregunta
    }
    chequearPreguntaWS(data)
};


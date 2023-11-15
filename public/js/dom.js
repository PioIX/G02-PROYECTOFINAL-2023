
async function deleteJSON(dataDeleteUser) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    
  
    try {
      const response = await fetch("/deleteUser", {
        method: "DELETE", // or 'POST'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataDeleteUser),
      });
      
      //En result obtengo la respuesta
      const result = await response.json();
      console.log("Success:", result);
  
      if (result.validar == false) {
        alert("")
      } else {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        alert("El usuario ha sido eliminado correctamente")
        let select1 = document.getElementById("delete1")
        let select2 = document.getElementById("delete2")
        for(let child of select1.children) {
          if (child.value == dataDeleteUser.name) {
            child.remove()
          }
        }
        for (let child of select2.children) {
          if (child.value == dataDeleteUser.playerName) {
            child.remove()
          }
        }


        
      }
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function deleteUser() {
    //Leo los datos del input
    let name = document.getElementById("delete1").value
    
  
    //Creo un objeto de forma instantanea
    let dataDeleteUser= {
        playerName: name,
    }
  
    //data es el objeto que le paso al back
    deleteJSON(dataDeleteUser)
  }
  
  async function deleteJSON2(dataDeletePuntaje) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    
  
    try {
      const response = await fetch("/deletePuntaje", {
        method: "DELETE", // or 'POST'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataDeletePuntaje),
      });
      
      //En result obtengo la respuesta
      const result = await response.json();
      console.log("Success:", result);
  
      if (result.validar == false) {
        alert("")
      } else {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        alert("El puntaje del usuario ha sido eliminado correctamente")
        
        
      }
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function deletePuntaje() {
    //Leo los datos del input
    let name = document.getElementById("delete2").value
    //Creo un objeto de forma instantanea
    let dataDeletePuntaje= {
        playerName: name
    }
  
    //data es el objeto que le paso al back
    deleteJSON2(dataDeletePuntaje)
  }
  
  async function postJSON1(dataAddQuestion) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    
  
    try {
      const response = await fetch("/addQuestion", {
        method: "POST", // or 'POST'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAddQuestion),
      });
      
      //En result obtengo la respuesta
      const result = await response.json();
      console.log("Success:", result);
  
      if (result.validar == false) {
        alert("")
      } else {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        alert("la palabra ha sido agregada correctamente")
        
        
      }
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function addQuestion() {
    //Leo los datos del input
    let newName = document.getElementById("newQuestion").value
    let newCat = document.getElementById("addQ").value
    let stellar = document.getElementById("addQ2").value
    //Creo un objeto de forma instantanea
    let dataAddQuestion= {
        questionName: newName,
        questionCat: newCat,
        stellarVer: stellar

    }
  
    //data es el objeto que le paso al back
    postJSON1(dataAddQuestion)
  }
  
  async function putJSON(dataEditQuestion) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    
  
    try {
      const response = await fetch("/editQuestion", {
        method: "PUT", // or 'POST'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataEditQuestion),
      });
      
      //En result obtengo la respuesta
      const result = await response.json();
      console.log("Success:", result);
  
      if (result.validar == false) {
        alert("")
      } else {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        alert("la palabra ha sido editada correctamente")
        
        
      }
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function editQuestion() {
    //Leo los datos del input
    let editName = document.getElementById("editQuestion").value
    let editCat = document.getElementById("editQ").value
    let preQuest = document.getElementById("edit1").value
    //Creo un objeto de forma instantanea
    let dataEditQuestion= {
        editName: editName,
        editCat: editCat,
        preQuest: preQuest
    }
  
    //data es el objeto que le paso al back
    putJSON(dataEditQuestion)
  }


let casillero1 = 1
let casillero2 = 1
let casillero3 = 1
let casillero4 = 1

const CASILLEROS_ESTELARES = []
const MAX_CASILLEROS = 44;

function tirarDado(){
  let valor = Math.floor(Math.random() * 6)+1
    console.log(valor)
    if (jugador = 1){
      ficha1 = '<div id="ficha1" class="fichita fichita-p1"></div>'
      variable = document.getElementById(casillero1).innerHTML
      variable.replace(ficha1, '') 
      casillero1 += valor
      if (casillero1 > MAX_CASILLEROS){
        casillero1 = casillero1 % MAX_CASILLEROS
        console.log(casillero1)
        }
        document.getElementById(casillero1).innerHTML += ficha1
    }
    else if (jugador = 2){
      casillero2 += valor
      if (casillero2 > MAX_CASILLEROS){
        casillero2 = casillero2 % MAX_CASILLEROS
        console.log(casillero2)
        }
    }
    else if (jugador = 3){
      casillero3 += valor
      if (casillero3 > MAX_CASILLEROS){
        casillero3 = casillero3 % MAX_CASILLEROS
        console.log(casillero3)
        }
    }
    else if (jugador = 4){
      casillero4 += valor
      if (casillero4 > MAX_CASILLEROS){
        casillero4 = casillero4 % MAX_CASILLEROS
        console.log(casillero4)
        }
    }
    jugador ++
    if (jugador > 4){
      jugador = 1
    }
}



function chequearPregunta(){
    let tipoPregunta = ""
    let estelar = false
    let tipoCasillero = document.getElementById(casillero)
    let casilleroStyle = window.getComputedStyle(tipoCasillero);
    let color_casillero = casilleroStyle.getPropertyValue('background-color');
    if (color_casillero = 'rgb(255, 201, 35)'){
        tipoPregunta = "historia"
    }
    else if (color_casillero = 'rgb(255, 156, 0)' ){
        tipoPregunta = "deportes"
    }
    else if (color_casillero = 'rgb(244, 67, 54)' ){
        tipoPregunta = "arte"
    }
    else if (color_casillero = 'rgb(11, 102, 49)' ){
        tipoPregunta = "ciencia"
    }
    else if (color_casillero = 'rgb(255, 130, 191)' ){
        tipoPregunta = "entretenimiento"
    }
    else if (color_casillero = 'rgb(153, 153, 153)' ){
        tipoPregunta = "random"
    }
    if (CASILLEROS_ESTELARES.includes(casillero)){
      estelar = true
    } 
    let data = {
      pregunta : tipoPregunta,
      preguntaEstelar : estelar
    }
    console.log(tipoPregunta)
    chequearPreguntaWS(data)
}

function validarRespuesta(){
  
  let respuesta = {
    opcion : respuesta
  }
}



function agregarPregunta(){

}

function editarPregunta(){

}

function borrarPregunta(){

}

function buscarPregunta(){

}


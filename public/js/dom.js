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


let jugador = 1

let casillero1 = 0
let casillero2 = 0
let casillero3 = 0
let casillero4 = 0

let estrellas1 = 0
let estrellas2 = 0
let estrellas3 = 0
let estrellas4 = 0



const CASILLEROS_ESTELARES = [6,14,20,27,40]
const MAX_CASILLEROS = 43;

let valor = 0

function tirarDado(){
    valor = Math.floor(Math.random() * 6)+1
    console.log(valor)
    if (jugador == 1){
        let ficha1 = '<div class="fichita fichita-p1"></div>'
        variable = document.getElementsByClassName("fichita fichita-p1")[0]
        variable.parentNode.removeChild(variable)
        console.log(variable)
        casillero1 += valor
        if (casillero1 > MAX_CASILLEROS){
          casillero1 = casillero1 % MAX_CASILLEROS
          console.log(casillero1)
          }
          document.getElementById(casillero1).innerHTML += ficha1
      }
    else if (jugador == 2){
        let ficha2 = '<div class="fichita fichita-p2"></div>'
        variable = document.getElementsByClassName("fichita fichita-p2")[0]
        variable.parentNode.removeChild(variable)
        console.log(variable)
        casillero2 += valor
        if (casillero2 > MAX_CASILLEROS){
          casillero2 = casillero2 % MAX_CASILLEROS
          console.log(casillero2)
          }
          document.getElementById(casillero2).innerHTML += ficha2
      }
    else if (jugador == 3){
        let ficha3 = '<div class="fichita fichita-p3"></div>'
        variable = document.getElementsByClassName("fichita fichita-p3")[0]
        variable.parentNode.removeChild(variable)
        console.log(variable)
        casillero3 += valor
        if (casillero3 > MAX_CASILLEROS){
          casillero3 = casillero3 % MAX_CASILLEROS
          console.log(casillero3)
          }
          document.getElementById(casillero3).innerHTML += ficha3
      }
    else if (jugador == 4){
        let ficha4 = '<div class="fichita fichita-p4"></div>'
        variable = document.getElementsByClassName("fichita fichita-p4")[0]
        variable.parentNode.removeChild(variable)
        console.log(variable)
        casillero4 += valor
        if (casillero4 > MAX_CASILLEROS){
          casillero4 = casillero4 % MAX_CASILLEROS
          console.log(casillero4)
          }
          document.getElementById(casillero4).innerHTML += ficha4
      }
    chequearPregunta(jugador)
}



function chequearPregunta(jugador){
    let casillero = -1
    if (jugador == 1){
       casillero = casillero1
    }
    else if (jugador == 2){
      casillero = casillero2
    }
    else if (jugador == 3){
      casillero = casillero3
    }
    else if (jugador == 4){
      casillero = casillero4
    }
    let tipoPregunta = ""
    let estelar = false
    let tipoCasillero = document.getElementById(casillero)
    let casilleroStyle = window.getComputedStyle(tipoCasillero);
    let color_casillero = casilleroStyle.getPropertyValue('background-color');
    console.log(color_casillero)
    if (color_casillero == 'rgb(255, 201, 35)'){
        tipoPregunta = "Historia"
      }
    else if (color_casillero == 'rgb(255, 156, 0)' ){
        tipoPregunta = "Deporte"
      }
    else if (color_casillero == 'rgb(244, 67, 54)' ){
        tipoPregunta = "Arte"
      }
    else if (color_casillero == 'rgb(11, 102, 49)' ){
        tipoPregunta = "Ciencia"
      }
    else if (color_casillero == 'rgb(255, 130, 191)' ){
        tipoPregunta = "Entretenimiento"
      }
    else if (color_casillero == 'rgb(153, 153, 153)' ){
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
    console.log(estelar)
    console.log(data)
    chequearPreguntaWS(data)
}


async function fetchRespuesta(data) {
  try {
    const response = await fetch("/validarRespuesta", {
      method: "PUT", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);

    if (result.validar == false) {
      alert("")
      }

  } catch (error) {
    console.error("Error:", error);
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

function showCrearSala() {
  inputSala1 = document.getElementById("inputSala");
  if (inputSala1.style.display = "none") {
    inputSala1.style.display = ""
  }
}

function showUnirseSala() {
  inputSala = document.getElementById("inputSala2");
  if (inputSala.style.display = "") {
    inputSala.style.display = "none"
  }
}

var n = 30;
let intervalo = window.setInterval(function(){
  document.getElementById("number").innerHTML = n;
  if (n >= 1){
    n--;
  }
  else{
    clearInterval(intervalo);
  }
},1000);

function validar(btn) {
  let opcion = btn.id;
  if (opcion == respuesta_correcta) {
    document.getElementById(btn.id).style.backgroundColor = "#00a135";
  }
  else {
    document.getElementById(btn.id).style.backgroundColor = "#FF0000"
    if (jugador == 1){
      let ficha1 = '<div class="fichita fichita-p1"></div>'
      variable = document.getElementsByClassName("fichita fichita-p1")[0]
      variable.parentNode.removeChild(variable)
      casillero1 -= valor
      document.getElementById(casillero1).innerHTML += ficha1
      }
    else if (jugador == 2){
      let ficha2 = '<div class="fichita fichita-p2"></div>'
      variable = document.getElementsByClassName("fichita fichita-p2")[0]
      variable.parentNode.removeChild(variable)
      casillero2 -= valor
      document.getElementById(casillero2).innerHTML += ficha2
    }
  else if (jugador == 3){
    let ficha3 = '<div class="fichita fichita-p3"></div>'
    variable = document.getElementsByClassName("fichita fichita-p3")[0]
    variable.parentNode.removeChild(variable)
    casillero3 -= valor
    document.getElementById(casillero3).innerHTML += ficha3
    }
else if (jugador == 4){
  let ficha4 = '<div class="fichita fichita-p4"></div>'
  variable = document.getElementsByClassName("fichita fichita-p4")[0]
  variable.parentNode.removeChild(variable)
  casillero4 -= valor
  document.getElementById(casillero4).innerHTML += ficha4
    }
  }
  jugador ++
    if (jugador > 4){
      jugador = 1
    }
}
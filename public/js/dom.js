
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
    let newDef = document.getElementById("newDef").value
    //Creo un objeto de forma instantanea
    let dataAddQuestion= {
        questionName: newName,
        questionDef: newDef
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
    let editDef = document.getElementById("editDefinition").value
    let preQuest = document.getElementById("edit1").value
    //Creo un objeto de forma instantanea
    let dataEditQuestion= {
        editName: editName,
        editDef: editDef,
        preQuest: preQuest
    }
  
    //data es el objeto que le paso al back
    putJSON(dataEditQuestion)
  }


let casillero = 0

const MAX_CASILLEROS = 43;

function tirarDado(){
    let valor = Math.floor(Math.random() * 6)+1
    console.log(valor)
    casillero += valor
    if (casillero > MAX_CASILLEROS){
        casillero = casillero % MAX_CASILLEROS
        console.log(casillero)
    }

}


function chequearPregunta(){
    let tipoPregunta = ""
    let tipoCasillero = document.getElementBy
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
        tipoPregunta = "random"
    }


function agregarPregunta(){

}

function editarPregunta(){

}

function borrarPregunta(){

}

function buscarPregunta(){

}


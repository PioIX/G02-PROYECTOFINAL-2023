const IP = "ws://localhost:3002";
const socket = io(IP);


socket.on("connect", () => {
    console.log("Me conecté a WS");
    socket.emit("server-message", { mensaje: "MENSAJE DEL SERVIDOR" });
});

socket.on('server-message', data => {
    console.log("INCOMING MESSAGE:", data);        
});

function funcionPrueba() {
    socket.emit("incoming-message", { mensaje: "PRUEBA" });
}


function chequearPreguntaWS(data){
    socket.emit("tipo-pregunta", data);
    console.log(data.pregunta)
}

socket.on('mandar-pregunta', data => {
    
    console.log("pregunta", data);        
});

function unirseSala() {
    console.log(sessionStorage.getItem('sala'))
    socket.emit("unirse-sala", {rooms: sessionStorage.getItem('sala')});
}

function crearSala() {
  socket.emit("crear-sala", {rooms: sessionStorage.getItem('sala')});
}


function conseguirSala() {
    sala = document.getElementById("Sala").value
    crearSala(sala)
}

async function unirseRoom(dataJoinRoom) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    
  
    try {
      const response = await fetch("/joinGame", {
        method: "PUT", // or 'POST'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataJoinRoom),
      });
      
      //En result obtengo la respuesta
      const result = await response.json();
      console.log("Success:", result);
  
      if (result.validar == false) {
        alert("La sala a la que intenta unirse no existe o esta llena")
      } else {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        let sala2= document.getElementById("Sala2").value
        location.href = '/game'
        
        
      }
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function joinRoom() {
    //Leo los datos del input
    let sala2= document.getElementById("Sala2").value
    //Creo un objeto de forma instantanea
    let dataJoinRoom= {
        sala: sala2
    }
    sessionStorage.setItem('sala', sala2)
    unirseRoom(dataJoinRoom)
  }


  async function createRoom(dataCreateRoom) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    
  
    try {
      const response = await fetch("/createRoom", {
        method: "POST", // or 'POST'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataCreateRoom),
      });
      
      //En result obtengo la respuesta
      const result = await response.json();
      console.log("Success:", result);
  
      if (result.validar == false) {
        alert("La sala que intenta crear ya existe")
      } else {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        let sala = document.getElementById("Sala").value
        location.href = '/game'
        
        
        
      }
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function createRoom2() {
    //Leo los datos del input
    let sala1= document.getElementById("Sala").value
    //Creo un objeto de forma instantanea
    let dataCreateRoom= {
        sala: sala1
    }
    sessionStorage.setItem('sala', sala1)
    createRoom(dataCreateRoom)
  }

  async function golazo(envido) {
    //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    
  
    try {
      const response = await fetch("/changeScreen", {
        method: "POST", // or 'POST'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(envido),
      });
      
      //En result obtengo la respuesta
      const result = await response.json();
      console.log("Success:", result);
  
      if (result.validar == false) {
        alert("caca")
      } else {
        //Envio el formularia desde dom para cambiar de pagina
        //Podria usar tambien un changeScreen()
        location.href = '/game'
        
        
      }
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function noMeLoCreo() {
    //Leo los datos del input
    let hola = "hola"
    //Creo un objeto de forma instantanea
    let envido = {
        hola1: hola
    }
    golazo(envido)
  }

socket.on("conexion-user", data => {
  console.log("SE UNIO USUARIO CON ID: ", data.user)
});
socket.on("conexion-user", data => {
  console.log("SE UNIO USUARIO CON ID: ", data.user)
});

socket.on("conexion-user", data => {
  console.log("SE UNIO USUARIO CON ID: ", data.user)
});


function changeWaitingRoom() {
  socket.emit('iniciar-partida', sessionStorage.getItem('sala'))
  let espera = document.getElementById("espera")
  let juego = document.getElementById("juego")

  if(espera.style.display !="none") {
    espera.style.display = "none"
    juego.style.display = ""
  }  
}

socket.on("empieza-partida", data => {
  let espera = document.getElementById("espera")
  let juego = document.getElementById("juego")
  console.log("llegue")
  if(espera.style.display !="none") {
    espera.style.display = "none"
    juego.style.display = ""
  }
  }  
  
  //Ambos pasan por aca despues de unirse
  //Antes de ellegar aca el back me tiene q mandar q usuario se unio
  //Em este emit llega del back y ahi se fija q usuario es y le emite a todos ese usuario
  //Agarras el usuario y lo mostras
)

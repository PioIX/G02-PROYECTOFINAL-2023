const IP = "ws://localhost:3000";
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

function unirseSala(sala_user) {
    console.log(sala_user)
    socket.emit("unirse-sala", {sala: sala_user});
}

function crearSala(sala_user) {
    console.log(sala_user)
    socket.emit("crear-sala", {sala: sala_user});
}


function conseguirSala() {
    sala = document.getElementById("Sala").value
    crearSala(sala)
}

function unirseSala2() {
    sala = document.getElementById("Sala").value
    unirseSala(sala_user)
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
        location.href = '/waitingRoom'
        unirseSala(sala2)
        
        
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
        location.href = '/waitingRoom'
        crearSala(sala)
        
        
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
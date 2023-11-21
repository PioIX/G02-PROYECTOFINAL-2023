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
  mostrarModal()
  cronometro()
   document.getElementById("opcion0").style.backgroundColor = "#6c757d" 
   document.getElementById("opcion1").style.backgroundColor = "#6c757d" 
   document.getElementById("opcion2").style.backgroundColor = "#6c757d" 
   document.getElementById("opcion3").style.backgroundColor = "#6c757d" 
   console.log(data.opciones)
   respuesta_correcta = data.opciones
   document.getElementById("id_titulo").innerHTML = data.pregunta.content
   document.getElementById("opcion0").innerHTML = data.opciones[0].opcion
   document.getElementById("opcion1").innerHTML = data.opciones[1].opcion
   document.getElementById("opcion2").innerHTML = data.opciones[2].opcion
   document.getElementById("opcion3").innerHTML = data.opciones[3].opcion  
   console.log("pregunta", data);
   for (i in data.opciones){
       if (data.opciones[i].correct == 1){
             respuesta_correcta = "opcion"+i
           }
     }
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
function chequearPreguntaWS(data){
  console.log(data.pregunta)
  socket.emit("tipo-pregunta", data);
}


let respuesta_correcta = "opcion"


socket.on('mandar-pregunta', data => {
  // myModal.show()
  cronometro()
   document.getElementById("opcion0").style.backgroundColor = "#6c757d"
   document.getElementById("opcion1").style.backgroundColor = "#6c757d"
   document.getElementById("opcion2").style.backgroundColor = "#6c757d"
   document.getElementById("opcion3").style.backgroundColor = "#6c757d"
   console.log(data.opciones)
   respuesta_correcta = data.opciones
   document.getElementById("id_titulo").innerHTML = data.pregunta.content
   document.getElementById("opcion0").innerHTML = data.opciones[0].opcion
   document.getElementById("opcion1").innerHTML = data.opciones[1].opcion
   document.getElementById("opcion2").innerHTML = data.opciones[2].opcion
   document.getElementById("opcion3").innerHTML = data.opciones[3].opcion  
   console.log("pregunta", data);
   for (i in data.opciones){
       if (data.opciones[i].correct == 1){
             respuesta_correcta = "opcion"+i
           }
     }
 });


let global = 0

socket.on("empieza-partida", data => {
  let espera = document.getElementById("espera")
  let juego = document.getElementById("juego")
  console.log("llegue")
  console.log(data.usernames)
  if(espera.style.display !="none") {
    espera.style.display = "none"
    juego.style.display = ""
  }
  if(data.usernames[0] != undefined) {
    document.getElementById("player1").classList.add("fichitaGrandeP1")
    document.getElementById("player1").innerHTML = data.usernames[0]
    document.getElementById("ficha1").classList.add("fichita")
    document.getElementById("ficha1").classList.add("fichita-p1")
    global++
  }
  if(data.usernames[1] != undefined) {
    document.getElementById("player2").classList.add("fichitaGrandeP2")
    document.getElementById("player2").innerHTML = data.usernames[1]
    document.getElementById("ficha2").classList.add("fichita")
    document.getElementById("ficha2").classList.add("fichita-p2")
    global++
  }
  if(data.usernames[2] != undefined) {
    document.getElementById("player3").classList.add("fichitaGrandeP3")
    document.getElementById("player3").innerHTML = data.usernames[2]
    document.getElementById("ficha3").classList.add("fichita")
    document.getElementById("ficha3").classList.add("fichita-p3")
    global++
  }
  if(data.usernames[3] != undefined) {
    document.getElementById("player4").classList.add("fichitaGrandeP4")
    document.getElementById("player4").innerHTML = data.usernames[3]
    document.getElementById("ficha4").classList.add("fichita")
    document.getElementById("ficha3").classList.add("fichita-p4")
    global++
  }

  } 
  
  //Ambos pasan por aca despues de unirse
  //Antes de ellegar aca el back me tiene q mandar q usuario se unio
  //Em este emit llega del back y ahi se fija q usuario es y le emite a todos ese usuario
  //Agarras el usuario y lo mostras
)

socket.on("actualizar", data => {
    document.getElementById("usersInRoom").innerHTML =  "Usuarios conectados: " + data.users
})

function tirarDado1() {
  socket.emit("tiro-dado", {verif: true})
}

socket.on("completo", data => {
  tirarDado(data.valor)
})
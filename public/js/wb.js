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


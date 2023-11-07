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

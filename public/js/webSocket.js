const IP = "ws://localhost:3000";
const socket = io(IP);

function chequearPreguntaWS(data){
    socket.emit("tipo-pregunta", data);
    console.log(data.pregunta)
}



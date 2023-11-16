


/*  Paquetes instalados: -g nodemon, express, express-handlebars, body-parser, mysql2
    Agregado al archivo "package.json" la línea --> "start": "nodemon index"
    
    Proyecto "Node_base"
    Desarrollo de Aplicaciones Informáticas - 5to Informática
    
    Docentes: Nicolás Facón, Martín Rivas
    
    Revisión 1 - Año 2021
*/
//Cargo librerías instaladas y necesarias
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser'); //Para el manejo de los strings JSON
const MySQL = require('./modulos/mysql'); //Añado el archivo mysql.js presente en la carpeta módulos
const { ClientRequest } = require('http');
const session = require('express-session')

const { initializeApp } = require("firebase/app");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  GoogleAuthProvider,
} = require("firebase/auth");

const fileUpload = require('express-fileupload');
const app = express(); //Inicializo express para el manejo de las peticiones

app.use(express.static('public')); //Expongo al lado cliente la carpeta "public"

app.use(bodyParser.urlencoded({ extended: false })); //Inicializo el parser JSON
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'})); //Inicializo Handlebars. Utilizo como base el layout "Main".
app.set('view engine', 'handlebars'); //Inicializo Handlebars

const Listen_Port = 3000; //Puerto por el que estoy ejecutando la página Web

const server = app.listen(Listen_Port, function() {
  console.log('Servidor NodeJS corriendo en http://localhost:' + Listen_Port + '/');
});

const io = require('socket.io')(server);

const sessionMiddleware = session({
  secret: 'sararasthastka',
  resave: true,
  saveUninitialized: false,
});

app.use(sessionMiddleware);

io.use(function(socket, next) {
  sessionMiddleware(socket.request, socket.request.res, next);
});

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpZOn6-dsRW4L_--L3KFrQ90WoAFJL5ps",
  authDomain: "proyecto-g02.firebaseapp.com",
  projectId: "proyecto-g02",
  storageBucket: "proyecto-g02.appspot.com",
  messagingSenderId: "777646381507",
  appId: "1:777646381507:web:e38787f3e708e81d9a4576"
};
  
  const appFirebase = initializeApp(firebaseConfig);
  const auth = getAuth(appFirebase);
  
  // Importar AuthService
  const authService = require("./authService");

  app.use(session({secret: '123456', resave: true, saveUninitialized: true}));

  app.use(fileUpload());

/*
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
*/

app.get('/', function(req, res)
{
    //Petición GET con URL = "/", lease, página principal.
    console.log(req.query); //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('login', null); //Renderizo página "login" sin pasar ningún objeto a Handlebars
});

app.get('/login', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('home', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.get('/register', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('register', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.get('/home', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('home', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.get('/juego', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('juego', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.get('/reglas', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('reglas', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.get('/estadisticas', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('estadisticas', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.get('/admin', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('admin', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const userCredential = await authService.loginUser(auth, {
        email,
        password,
      });
      let verificar = -1
      let usuarios = await MySQL.realizarQuery("SELECT * FROM players")
      let puntaje = await MySQL.realizarQuery("SELECT * FROM points")
      let questions = await MySQL.realizarQuery("SELECT * FROM questions")
      for (let i in usuarios) {
        if(usuarios[i].gmail == req.body.email) {
          if(usuarios[i].password == req.body.password) {
            verificar = 1
            req.session.id_usuario = usuarios[i].id_player
            if (usuarios[i].admin == true) {
              verificar = 2
              req.session.id_usuario = usuarios[i].id_player
            }
          }
        }
      }
      // Aquí puedes redirigir al usuario a la página que desees después del inicio de sesión exitoso
      if(verificar == -1) {
        console.log("no existe user o no es valida contraseña")
        res.render('login', null)
      }
      if(verificar == 1) {
        res.render('home', null)
      }
      if(verificar == 2) {
        res.render('admin', {users: usuarios, points: puntaje, preguntas: questions})
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      res.render("login", {
        message: "Error en el inicio de sesión: " + error.message,
      });
    }
})

app.put('/login', function(req, res) {
    //Petición PUT con URL = "/login"
    console.log("Soy un pedido PUT", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método PUT
    res.send(null);
});

app.get('/game', function(req, res) {
  //Petición PUT con URL = "/login"
  console.log("Soy un pedido GET", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método PUT
  res.render('juego', null);
});

app.delete('/login', function(req, res) {
    //Petición DELETE con URL = "/login"
    console.log("Soy un pedido DELETE", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método DELETE
    res.send(null);
});

app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
      await authService.registerUser(auth, {email, password });
      await MySQL.realizarQuery(`INSERT INTO players (password, gmail, username, admin) VALUES ("${req.body.password}", "${req.body.email}", "${req.body.username}", FALSE)`)
      res.render("register", {
        message: "Registro exitoso. Puedes iniciar sesión ahora.",
      });
    } catch (error) {
      console.error("Error en el registro:", error);
      res.render("register", {
        message: "Error en el registro: " + error.message,
      });
    }
  });
app.get('/crearSala', function(req, res) {
  //Petición PUT con URL = "/login"
  console.log("Soy un pedido GET", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método PUT
  res.render('juego', null);
});

async function createRoom(data, session, res) {
  let room = await MySQL.realizarQuery(`INSERT INTO rooms (id_room, player1, player2, player3, player4) VALUES(${data},${session.id_usuario}, ${-1}, ${-1}, ${-1})`)
}

  function Recibir_Archivo(req, carpeta, isImage, callback)
  {
  if (!req.files)
  {
    callback(-1);
  }
  else
  {
    let file = req.files.uploaded_image;
    if(file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif" || isImage == false)
    {
      file.mv(carpeta + file.name, function(err)
      {
        if (err)
        {
          callback(-2);
        }
        else
        {
          callback(file.name);
        }
      });
    }
    else
    {
      console.log("Formato no permitido, utilice '.png','.gif','.jpg'.");
      callback(0);
    }
  }
  }

  io.on('connection', (socket) => {
    console.log("estoy conectado")
    const req = socket.request;
    socket.join(1)
    socket.on('crear-sala', data => {
      if(req.session.sala != "")
        socket.leave(req.session.sala);
      socket.join(data.sala)
      req.session.sala = data.sala;
      req.session.save()
      createRoom(data.sala, req.session)
      console.log("SE CREO LA SALA:", data.sala)
  })
    socket.on('unirse-sala', data => {
      if(req.session.sala != "")
          socket.leave(req.session.sala);
      socket.join(data.sala)
      req.session.sala = data.sala;
      req.session.save()
      console.log("ME UNI A LA SALA:", data.sala)
  });
    io.on("tipo-pregunta", async data =>{
      let preguntaMostrar = ""
        if (data.pregunta != "random"){
          let preguntas = MySQL.realizarQuery(`SELECT * FROM questions WHERE category = ${data.pregunta} and stellar_question = ${data.preguntaEstelar}`)
          let cantidad = preguntas.length()
          let numero = Math.floor(Math.random() * cantidad);
          for (i in preguntas){
            if (i = numero){
              preguntaMostrar = preguntas[i]
            }
          }
        }  
        else {
          let preguntas = MySQL.realizarQuery(`SELECT * FROM questions`)
          let cantidad = preguntas.length()
          let num = Math.floor(Math.random() * cantidad);
          for (i in preguntas){
            if (i = num){
              preguntaMostrar = preguntas[i]
                }
            }
          }
      let objeto = {
        pregunta : preguntaMostrar
      }

      io.emit("mandar-pregunta", objeto);
      console.log(objeto.pregunta)
  })
})


app.get('/admin',async function(req, res) {
    let palabras = await MySQL.realizarQuery("SELECT * FROM palabras")
    let usuarios = await MySQL.realizarQuery("SELECT * FROM usuarios")
    res.render('admin', {users: usuarios, words: palabras})
});

app.post('/addQuestion',async function(req, res) {
    let comprobacionTrue = true
    let comprobacionFalse = false
    if (req.body.stellarVer == "true") {
      stellarverif = true
    }
    else {
      stellarverif = false
    }
    if (req.body.questionName.length>0 && req.body.questionCat.length>0) {
        await MySQL.realizarQuery(`INSERT INTO palabras (content, category, stellar_question) VALUES("${req.body.questionName}",${req.body.questionCat}, ${stellarverif})`)
        res.send({validar: comprobacionTrue})
    }
    else {
        res.send({validar: comprobacionFalse})
    }
})

app.delete('/deleteUser',async function(req, res) {
  let comprobacionTrue = true
  let comprobacionFalse = false
  if (req.body.playerName.length>0 && req.body.playerName.length>0) {
      await MySQL.realizarQuery(`DELETE * FROM users WHERE username = "${req.body.playerName}"`)
      res.send({validar: comprobacionTrue})
  }
  else {
      res.send({validar: comprobacionFalse})
  }
})

app.delete('/deletePuntajes',async function(req, res) {
  let comprobacionTrue = true
  let comprobacionFalse = false
  let user = await MySQL.realizarQuery(`SELECT * FROM players WHERE username = "${req.body.playerName}" `)
  let id_user = user[i].id_player
  if (req.body.playerName.length>0) {
      await MySQL.realizarQuery(`DELETE FROM points WHERE id_player = ${id_user}`)
      res.send({validar: comprobacionTrue})
  }
  else {
      res.send({validar: comprobacionFalse})
  }
})


app.put('/editQuestion',async function(req, res) {
  let comprobacionTrue = true
  let comprobacionFalse = false
  if (req.body.preQuest.length>0) {
      await MySQL.realizarQuery(`UPDATE questions SET content = "${req.body.editName}", category = "${req.body.editDef}" WHERE content = "${req.body.preQuest}"`)
      res.send({validar: comprobacionTrue})
  }
  else {
      res.send({validar: comprobacionFalse})
  }
})

app.post('/addOption',async function(req, res) {
  let comprobacionTrue = true
  let comprobacionFalse = false
  if (req.body.stellarVer == "true") {
    stellarverif = true
  }
  else {
    stellarverif = false
  }
  if (req.body.questionName.length>0 && req.body.questionCat.length>0) {
      await MySQL.realizarQuery(`INSERT INTO palabras (content, category, stellar_question) VALUES("${req.body.questionName}",${req.body.questionCat}, ${stellarverif})`)
      res.send({validar: comprobacionTrue})
  }
  else {
      res.send({validar: comprobacionFalse})
  }
})
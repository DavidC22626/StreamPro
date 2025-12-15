// Importar librerias
const express = require("express");
const session = require("express-session");
const app = express();


// configuraciones 
app.set("view engine", "ejs"); //Rutas de paginas dinamicas
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// manejo de sesiones
app.use(session({
    secret: "acceso_app",
    resave: false,
    saveUninitialized: false
}));

// rutas dinamicas y estaticas
app.use(require("./rutas/index"));
app.use(express.static("public"));
app.use(require("./rutas/registerUser"));
app.use(require("./rutas/login"));
app.use(require("./rutas/home"));

app.get('/login', function(req, res){
    res.render('login');
});

app.get('/registerUser', function(req, res){
    res.render('registerUser');
});

app.get('/home', function(req, res){
    res.render('home');
});

app.get('/suscripcion', function(req, res){
    res.render('suscripcion');
});

app.get('/recuperarPassword', function(req, res){
    res.render('recuperarPassword');
});

//Configuracion de servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    if(PORT == 3000){
        console.log("http://localhost:3000");
    }else{
        console.log(PORT);
    }
});


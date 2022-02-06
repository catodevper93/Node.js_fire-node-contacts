
const express = require("express");

const path = require("path");

const express_handlebars = require("express-handlebars");

// usamos el módulo morgan para recibir por consola las peticiones del usuario por cada ruta entrada
const morgan = require("morgan");



const rutas = require("./src/routes/index_route");




const app = express();

const PUERTO = process.env.PORT || 3000;


app.set("puerto", PUERTO);



// console.log(__dirname); //--> C:\Users\gasto\Desktop\Node\firebase-nodejs


// CONFIGURACIÓN MOTOR PLANTILLA
app.set("views", path.join(__dirname, "src/views"));

const opciones = express_handlebars.create({
    defaultLayout: "main",
    extname: ".hbs",
});

app.engine(".hbs", opciones.engine);

app.set("view engine", ".hbs");



// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
 
// rutas
app.use(rutas);


/* archivos estáticos como css, js, img, etc. todo en la carpeta "public" previamente creada,
por lo que a la hora de acceder a los archivos de la carpeta public simplemente lo haremos por
ejemplo /img, /css, etc.*/
app.use("/public", express.static(path.join(__dirname, "src/public")));



// escuchamos el servidor en el puerto especificado
app.listen(app.get("puerto"), ()=>{
    console.log("Server run on port", app.get("puerto"));

});
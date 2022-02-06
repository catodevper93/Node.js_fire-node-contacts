
// https://firebase.google.com/docs/admin/setup
// https://firebase.google.com/docs/firestore/manage-data/delete-data
// https://cloud.google.com/docs/authentication/getting-started

/*
Descargamos la credencial en firebase para tener un archivo json con las credenciales
de nuestra app, esta la usaremos en .env, la misma debe ser protegida y no subida al repositorio
por cuestiones de seguridad.

PASOS para descargar:
vamos a la consola. 
engrane (Configuración del proyecto)
creamos una nueva app si no lo hicimos
pulsamos el botón: generar nueva clave privada

Se nos descarga el archivo y lo copiamos en nuestro proyecto para que el entorno pueda
tomarse del mismo y así conectarnos a firestore.


*/


require("dotenv").config();


const {initializeApp, applicationDefault} = require("firebase-admin/app");

const {getFirestore} = require("firebase-admin/firestore");


// applicationDefault buscará por mí la variable de entorno creada para google
initializeApp({

    credential: applicationDefault()
});


const base_datos = getFirestore();


module.exports = {
    base_datos
}



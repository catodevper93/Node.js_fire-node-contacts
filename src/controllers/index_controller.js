
// importamos la configuración de firebase realizada para poder usar sus funcionalidades
const { base_datos } = require("../HELPERS/config_firebase");



const publicarRecurso = async (req, res) => {

    const { nombre, apellido, correo, telefono } = req.body;

    const datos_agregar = { nombre, apellido, correo, telefono };

    // "mostrar_listado", usado para mostrar el listado u ocultarlo
    const opciones = {
        mostrar_listado: true
    };


    await base_datos.collection("contactos").add(datos_agregar);

    res.redirect("/", opciones);

}


const getRecursos = async (req, res) => {


    try {

        const querySnapshot = await base_datos.collection("contactos").get();

        const contactos = querySnapshot.docs.map((doc) => ({

            id: doc.id,
            ...doc.data()

        }));

        // console.log(contactos);


        // "mostrar_listado", usado para mostrar el listado u ocultarlo
        const opciones = {

            lista_contactos: contactos,
            mostrar_listado: true
        }

        res.render("index", opciones);


    } catch (error) {

        console.log(error.message);

    }

}


const editarGetRecursoPorId = async (req, res) => {

    const { id } = req.params;

    const doc = await base_datos.collection("contactos").doc(id).get();

    // "mostrar_listado", usado para mostrar el listado u ocultarlo
    const opciones = {
        contacto: {
            id: doc.id,
            ...doc.data()
        },
        mostrar_listado: false

    };

    res.render("index", opciones);
}


const editarRecurso = async (req, res) => {

    const { nombre, apellido, correo, telefono } = req.body;

    const { id } = req.params;


    const datos_edicion = { nombre, apellido, correo, telefono }

    await base_datos.collection("contactos").doc(id).update(datos_edicion);

    res.redirect("/");
}


const eliminarRecursoPorId = async (req, res) => {

    const { id } = req.params;

    await base_datos.collection("contactos").doc(id).delete();


    res.redirect("/");


}



module.exports = {
    publicarRecurso,
    getRecursos,
    editarGetRecursoPorId,
    editarRecurso,
    eliminarRecursoPorId
}
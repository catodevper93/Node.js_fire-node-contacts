
const { publicarRecurso, getRecursos, editarGetRecursoPorId, 
    editarRecurso,eliminarRecursoPorId
} = require("../controllers/index_controller");



const { Router } = require("express");


const router = Router();


router.post("/new-contact", publicarRecurso);

router.get("/", getRecursos);

router.get("/edit-contact/:id", editarGetRecursoPorId); //obtenemos registro a editar

router.post("/edited-contact/:id", editarRecurso); // editamos registro obtenido

router.get("/delete-contact/:id", eliminarRecursoPorId);



module.exports = router;

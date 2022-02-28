const { Router } = require('express');

const {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios,
} = require('../controllers/usuarios.js');

const router = Router();


/* router.get('/', (req, res) => {
    res.json({
        msg: "get API"
    })
}) */         //Esta ruta contiene un callback como CONTROLADOR, hay que separarlo.


//Ejemplo de ruta y controlador SEPARADOS
router.get('/', getUsuarios ); //GET

router.post('/', postUsuarios ); //POST

router.put('/:id', putUsuarios ); //PUT

router.patch('/', patchUsuarios ); //PATCH

router.delete('/', deleteUsuarios ); // DELETE



module.exports = router;
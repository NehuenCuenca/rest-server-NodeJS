const { response, request } = require('express');


const getUsuarios = (req = request, res = response) => {

    //capturo los parametros que vienen de la URL, los cuales se pueden inicializar en tal valor.. 
    const { paginado = true, registros = 15, apikey } = req.query;

    res.json({
        msg: "get API - controlador",
        paramsURL: {
            paginado,
            registros,
            apikey
        },
    })
}


const postUsuarios = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: "post API - controlador",
        body,
    })
}


const patchUsuarios = (req, res = response) => {

    res.json({
        msg: "patch API - controlador"
    })
}


const putUsuarios = (req, res = response) => {

    const { id }  = req.params;

    res.json({
        msg: "put API - controlador",
        id,
    })
}


const deleteUsuarios = (req, res = response) => {

    res.json({
        msg: "delete API - controlador"
    })
}


module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios,
}
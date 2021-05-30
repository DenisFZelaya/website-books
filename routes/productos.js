var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion');

/* GET productos page. */
router.get('/', function(req, res, next) {

    db.query("SELECT * FROM tblproductos", function(err, resultado){
        console.log(resultado);
        res.render('productos', { 
            title: 'Descarga tus libros.', Productos: resultado});
    });

})

module.exports = router;

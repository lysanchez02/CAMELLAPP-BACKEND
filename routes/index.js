var express = require('express');
var router = express.Router();

const controllerUsuario = require ('../controllers/controllerUsuario');
const controllerRol = require ('../controllers/controllerRol');
const controllerCategoria = require ('../controllers/controllerCategoria');
const controllerExperiencia = require ('../controllers/controllerExperiencia');
const controllerOfertaEmpleo = require ('../controllers/controllerOfertaEmpleo');
const controllerPostulaciones = require ('../controllers/controllerPostulaciones');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* rutas usuario */
router.get('/listarUsuario',controllerUsuario.listarUsuario);
router.post('/guardarUsuario',controllerUsuario.guardarUsuario);
router.get('/usuario/:id', controllerUsuario.listarIdUsuario);
router.delete('/eliminarUsuario/:id',controllerUsuario.eliminarUsuario);

/* rutas experiencia */
router.get('/listarExperiencia',controllerExperiencia.listarExperiencia);
router.post('/guardarExperiencia',controllerExperiencia.guardarExperiencia);
router.get('/experiencia/:id', controllerExperiencia.listarIdExperiencia);
router.delete('/eliminarExperiencia/:id',controllerExperiencia.eliminarExperiencia);

/* rutas ofertaEmpleo */
router.get('/listarOfertaEmpleo',controllerOfertaEmpleo.listarOfertaEmpleo);
router.post('/guardarOfertaEmpleo',controllerOfertaEmpleo.guardarOfertaEmpleo);
router.get('/ofertaEmpleo/:id', controllerOfertaEmpleo.listarIdOfertaEmpleo);
router.delete('/eliminarOfertaEmpleo/:id',controllerOfertaEmpleo.eliminarOfertaEmpleo);

/* rutas categoria */
router.get('/listarCategoria',controllerCategoria.listarCategoria);
router.post('/guardarCategoria',controllerCategoria.guardarCategoria);
router.get('/categoria/:id', controllerCategoria.listarIdCategoria);
router.delete('/eliminarCategoria/:id',controllerCategoria.eliminarCategoria);

/* rutas postulaciones */
router.get('/listarPostulaciones',controllerPostulaciones.listarPostulaciones);
router.post('/guardarPostulaciones',controllerPostulaciones.guardarPostulaciones);
router.get('/Postulaciones/:id', controllerPostulaciones.listarIdPostulaciones);
router.delete('/eliminarPostulaciones/:id',controllerPostulaciones.eliminarPostulaciones);

/* rutas rol */
router.get('/listarRol',controllerRol.listarRol);
router.post('/guardarRol',controllerRol.guardarRol);
router.get('/rol/:id', controllerRol.listarIdRol);
router.delete('/eliminarRol/:id',controllerRol.eliminarRol);

module.exports = router;

const Sequelize = require('sequelize');
const postulacion= require ("../models").postulaciones;

module.exports={   
    listarPostulaciones(req, res) {
      return postulacion.findAll({})
      .then(postulacion => res.status(200).send(postulacion))
    .catch(error => res.status(400).send(error));
    },

    listarIdPostulaciones(req, res) {
   return postulacion.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(postulacion => res.status(200).send(postulacion))
    .catch(error => res.status(400).send(error));
    },

   guardarPostulaciones(req, res){
        let postulacion = postulacion.create({
                idUsuario : req.body.idUsuario,
                idofertaempleo : req.body.idofertaempleo,
                fecha: req.body.fecha,
                estado: req.body.estado
             
        }).then(postulacion => res.status(200).send(postulacion))
        .catch(error => res.status(400).send(error));
            return(postulacion.id); 
    },
     
    eliminarPostulaciones(req,res) {
      return postulacion.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
 },
}
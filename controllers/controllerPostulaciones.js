const Sequelize = require('sequelize');
const postulaciones= require ("../models").postulaciones;

module.exports={   
    listarPostulaciones(req, res) {
      return postulaciones.findAll({})
      .then(postulaciones => res.status(200).send(postulaciones))
    .catch(error => res.status(400).send(error));
    },

    listarIdPostulaciones(req, res) {
   return postulaciones.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(postulaciones => res.status(200).send(postulaciones))
    .catch(error => res.status(400).send(error));
    },

   guardarPostulaciones(req, res){
        let postulaciones = postulaciones.create({
                idUsuario : req.body.idUsuario,
                idOfertaEmpleo : req.body.idOfertaEmpleo,
                fecha: req.body.fecha,
                estado: req.body.estado
             
        }).then(postulaciones => res.status(200).send(postulaciones))
        .catch(error => res.status(400).send(error));
            return(postulaciones.id); 
    },
     
    eliminarPostulaciones(req,res) {
      return postulaciones.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
 },
}
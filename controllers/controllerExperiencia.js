const Sequelize = require('sequelize');
const experiencias= require ("../models").experiencia;

module.exports={   
    listarExperiencia(req, res) {
      return experiencias.findAll({})
      .then(experiencias => res.status(200).send(experiencias))
    .catch(error => res.status(400).send(error));
    },

    listarIdExperiencia(req, res) {
   return experiencias.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(experiencias => res.status(200).send(experiencias))
    .catch(error => res.status(400).send(error));
    },

   guardarExperiencia(req, res){
        let experiencias = experiencias.create({
                idUsuario : req.body.idUsuario,
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                lugarTrabajo: req.body.lugarTrabajo,
                duracionTrabajo: req.body.duracionTrabajo,
                archivo: req.body.archivo,
             
        }).then(experiencias => res.status(200).send(experiencias))
        .catch(error => res.status(400).send(error));

            return(experiencias.id); 
            
    },
     
    eliminarExperiencia(req,res) {
      return experiencias.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}
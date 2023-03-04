const Sequelize = require('sequelize');
const experiencia= require ("../models/experiencia");

module.exports={   
    listarExperiencia(req, res) {
      return experiencia.findAll({})
      .then(experiencia => res.status(200).send(experiencia))
    .catch(error => res.status(400).send(error));
    },

    listarIdExperiencia(req, res) {
   return experiencia.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(experiencia => res.status(200).send(experiencia))
    .catch(error => res.status(400).send(error));
    },

   guardarExperiencia(req, res){
        let experiencia = experiencia  .create({
                idUsuario : req.body.idUsuario,
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                lugarTrabajo: req.body.lugarTrabajo,
                duracionTrabajo: req.body.duracionTrabajo,
                archivo: req.body.archivo,
             
        }).then(experiencia => res.status(200).send(experiencia))
        .catch(error => res.status(400).send(error));

            return(experiencia.id); 
            
    },
     
    eliminarExperiencia(req,res) {
      return experiencia.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}
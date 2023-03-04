const Sequelize = require('sequelize');
const ofertaEmpleo= require ("../models").ofertaEmpleo;

module.exports={   
    listarOfertaEmpleo(req, res) {
      return ofertaEmpleo.findAll({})
      .then(ofertaEmpleo => res.status(200).send(ofertaEmpleo))
    .catch(error => res.status(400).send(error));
    },

    listarIdOfertaEmpleo(req, res) {
   return ofertaEmpleo.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(ofertaEmpleo => res.status(200).send(ofertaEmpleo))
    .catch(error => res.status(400).send(error));
    },

   guardarOfertaEmpleo(req, res){
        let ofertaEmpleo = ofertaEmpleo.create({
                idUsuario : req.body.idUsuario,
                horario: req.body.horario,
                salario: req.body.salario,
                descripcion: req.body.descripcion,
                titulo: req.body.titulo,
                tiempoContrato: req.body.tiempoContrato
             
        }).then(ofertaEmpleo => res.status(200).send(ofertaEmpleo))
        .catch(error => res.status(400).send(error));
            return(ofertaEmpleo.id); 
    },
     
    eliminarOfertaEmpleo(req,res) {
      return ofertaEmpleo.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
 },
}
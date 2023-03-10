const Sequelize = require('sequelize');
const ofertasempleo= require ("../models").ofertaempleo;

module.exports={   
    listarofertaempleo(req, res) {
      return ofertasempleo.findAll({})
      .then(ofertasempleo => res.status(200).send(ofertasempleo))
    .catch(error => res.status(400).send(error));
    },

    listarIdofertaempleo(req, res) {
   return ofertasempleo.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(ofertasempleo => res.status(200).send(ofertasempleo))
    .catch(error => res.status(400).send(error));
    },

   guardarofertaempleo(req, res){
        let ofertasempleo = ofertasempleo.create({
                idUsuario : req.body.idUsuario,
                horario: req.body.horario,
                salario: req.body.salario,
                descripcion: req.body.descripcion,
                titulo: req.body.titulo,
                tiempoContrato: req.body.tiempoContrato
             
        }).then(ofertasempleo => res.status(200).send(ofertasempleo))
        .catch(error => res.status(400).send(error));
            return(ofertasempleo.id); 
    },
     
    eliminarofertaempleo(req,res) {
      return ofertasempleo.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
 },
}
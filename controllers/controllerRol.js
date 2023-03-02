const Sequelize = require('sequelize');
const rol= require ("../models").rol;

module.exports={   
    listarRol(req, res) {
      return rol.findAll({})
      .then(rol => res.status(200).send(rol))
    .catch(error => res.status(400).send(error));
    },

    listarIdRol(req, res) {
   return rol.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(rol => res.status(200).send(rol))
    .catch(error => res.status(400).send(error));
    },

   guardarRol(req, res){
        let rol = rol  .create({
                rol : req.body.rol,
                descripcion: req.body.descripcion,
                permisos: req.body.permisos
             
        }).then(rol => res.status(200).send(rol))
        .catch(error => res.status(400).send(error));

            return(rol.id); 
            
    },
     
    eliminarRol(req,res) {
      return rol.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}
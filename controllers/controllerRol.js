const Sequelize = require('sequelize');
const roles= require ("../models").rol;

module.exports={   
    listarRol(req, res) {
      return roles.findAll({})
      .then(roles => res.status(200).send(roles))
    .catch(error => res.status(400).send(error));
    },

    listarIdRol(req, res) {
   return roles.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(roles => res.status(200).send(roles))
    .catch(error => res.status(400).send(error));
    },

   guardarRol(req, res){
        let roles = roles  .create({
                roles : req.body.roles,
                descripcion: req.body.descripcion,
                permisos: req.body.permisos
             
        }).then(roles => res.status(200).send(roles))
        .catch(error => res.status(400).send(error));

            return(roles.id); 
            
    },
     
    eliminarRol(req,res) {
      return roles.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}
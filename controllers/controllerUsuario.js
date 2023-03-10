const Sequelize = require('sequelize');
const usuarios= require ("../models").usuario;

module.exports={   
    listarUsuario(req, res) {
      return usuarios.findAll({})
      .then(usuarios => res.status(200).send(usuarios))
    .catch(error => res.status(400).send(error));
    },

    listarIdUsuario(req, res) {
   return usuarios.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(usuarios => res.status(200).send(usuarios))
    .catch(error => res.status(400).send(error));
    },

   guardarUsuario(req, res){
        let usuarios = usuarios  .create({
                foto : req.body.foto,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                documento: req.body.documento,
                celular: req.body.celular,
                correo: req.body.correo,
                nacionalidad: req.body.nacionalidad,
                direccion: req.body.direccion,
                userName: req.body.userName,
                password: req.body.password
             
        }).then(usuarios => res.status(200).send(usuarios))
        .catch(error => res.status(400).send(error));

            return(usuarios.id); 
            
    },
     
    eliminarUsuario(req,res) {
      return usuarios.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}
const Sequelize = require('sequelize');
const usuario = require ("../models").usuario;

module.exports=
{   
    listarUsuario(req, res) {
      return usuario.findAll({})
      .then(usuario => res.status(200)
      .send(usuario)).catch(error => res.status(400).send(error));
    },

    listarIdUsuario(req, res) {
   return usuario.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.status(400).send(error));
    },

   guardarUsuario(req, res){
        let usuario = usuario  .create({
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
             
        }).then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error));

            return(usuario.id); 
            
    },
     
    eliminarUsuario(req,res) {
      return usuario.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}
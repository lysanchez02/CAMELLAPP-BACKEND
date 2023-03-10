module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('rolusuario',[
      {
        idUsuario: 1,
        idRol: 1,
      },
      {
        idUsuario: 2,
        idRol: 2,
      },
      {
        idUsuario: 3,
        idRol: 2,
      },
      {
        idUsuario: 4,
        idRol: 1,
      },
      {
        idUsuario: 5,
        idRol: 3,
      },
    ]
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rolusuario', null, {});
  }
};
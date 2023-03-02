module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('intereses',[
      {
        idUsuario: 1,
        idCategoria: 9
      },
      {
        idUsuario: 4,
        idCategoria: 1
      },
    ]
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('intereses', null, {});
  }
};
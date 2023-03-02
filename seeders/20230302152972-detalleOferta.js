module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('detalleOferta',[
      {
        idOfertaEmpleo: 1,
        idCategoria: 1,
      },
      {
        idOfertaEmpleo: 2,
        idCategoria: 9,
      },
      {
        idOfertaEmpleo: 3,
        idCategoria: 3,
      },
    ]
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('detalleOferta', null, {});
  }
};
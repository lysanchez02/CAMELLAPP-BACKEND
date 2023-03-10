module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('detalleoferta',[
      {
        idofertaempleo: 1,
        idCategoria: 1,
      },
      {
        idofertaempleo: 2,
        idCategoria: 9,
      },
      {
        idofertaempleo: 3,
        idCategoria: 3,
      },
    ]
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('detalleoferta', null, {});
  }
};
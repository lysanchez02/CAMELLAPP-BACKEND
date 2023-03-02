module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('postulaciones',[
      {
        idUsuario: 4,
        idOfertaEmpleo: 1,
        fecha: "02 marzo 2023",
        estado: "registrado"
      },
      {
        idUsuario: 4,
        idOfertaEmpleo: 2,
        fecha: "25 enero 2023",
        estado: "seleccionado"
      },
      {
        idUsuario: 4,
        idOfertaEmpleo: 1,
        fecha: "19 noviembre 2022",
        estado: "registrado"
      },
      {
        idUsuario: 1,
        idOfertaEmpleo: 3,
        fecha: "19 noviembre 2022",
        estado: "seleccionado"
      },
      {
        idUsuario: 1,
        idOfertaEmpleo: 2,
        fecha: "19 abril 2022",
        estado: "contratado"
      },
    ]
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('postulaciones', null, {});
  }
};
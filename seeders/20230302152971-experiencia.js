module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('experiencia',[
      {
        idUsuario: 1,
        titulo: "jardineria",
        descripcion:"servicios de jardineria en la ciudad de popayan",
        lugarTrabajo: "popayan conjunto residencial la estacion",
        duracionTrabajo: "3 meses",
        archivo: "url"
      },
      {
        idUsuario: 4,
        titulo: "soldadura",
        descripcion:"especialista en diferentes tipos de soldadura",
        lugarTrabajo: "trabajos hechos en la ciudad de popayan",
        duracionTrabajo: "1 año",
        archivo: "url"
        },
    ]
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('experiencia', null, {});
  }
};
module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('ofertaEmpleo',[
      {
        idUsuario: 2,
        horario: "lunes a viernes",
        salario: "salario minimo",
        descripcion: "requiero ayudante general para obra de construccion en popayan",
        titulo: "busco ayudante",
        tiempoContrato: "6 meses aprox",
      },
      {
        idUsuario: 2,
        horario: "lunes a sabado",
        salario: "salario minimo",
        descripcion: "requiero servicio de jardineria para conjunto cerrado en popayan",
        titulo: "servicio de jardineria",
        tiempoContrato: "indefinido",
      },
      {
        idUsuario: 3,
        horario: "todos los dias",
        salario: "salario minimo",
        descripcion: "necesito persona para trabajar en area de soldadura con experiencia",
        titulo: "soldador",
        tiempoContrato: "indefinido",
      },
    ]
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ofertaEmpleo', null, {});
  }
};
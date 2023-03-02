module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('rol',[
      {
        rol: "postulante",
        descripcion: "Accede a las ofertas de trabajo y postulate",
        permisos: "subir y editar su informacion, acceder y postularse a las ofertas de trabajo disponibles",
      },
      {
        rol: "empleador",
        descripcion: "busca a los mejores especialistas para hacer mas eficiente el trabajo",
        permisos: "subir y editar su informacion, publicar ofertas de empleo, seleccionar, contratar y acceder a la informacion de los postulantes",
      },
      {
        rol: "administrador",
        descripcion: "Accede a todas las funciones, incluyendo funciones avanzadas",
        permisos: "subir, editar y eliminar informacion personal y de otros usuarios, acceder, editar y eliminar ofertas de empleo, postulaciones y demas informacion registrada",
      },
    ]
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rol', null, {});
  }
};
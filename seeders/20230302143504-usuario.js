module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('usuario',[
      {
        foto: "url",
        nombres: "leyder",
        apellidos: "sanchez",
        documento: 1061544819,
        celular: "3246766502",
        correo: "lysanchez02@misena.edu.co",
        nacionalidad: "colombia",
        direccion: "v/ el cairo - cajibio",
        userName: "leyder",
        password: "12345678"
      },
      {
        foto: "url",
        nombres: "jhon",
        apellidos: "capote",
        documento: 10615426429,
        celular: "3218759455",
        correo: "jhonc@misena.edu.co",
        nacionalidad: "colombia",
        direccion: "cra9 n 63",
        userName: "jhonc",
        password: "12345678"
      },
      {
        foto: "url",
        nombres: "javier",
        apellidos: "galindez",
        documento: 1061531961,
        celular: "3242641297",
        correo: "yavier@misena.edu.co",
        nacionalidad: "colombia",
        direccion: "cll 5 n34",
        userName: "yagami",
        password: "12345678"
      },
      {
        foto: "url",
        nombres: "sebastian",
        apellidos: "gomez",
        documento: 10614127861,
        celular: "3142641297",
        correo: "sebasgomez@misena.edu.co",
        nacionalidad: "colombia",
        direccion: "cll 4 n14",
        userName: "sebasgomez",
        password: "12345678"
      },
      {
        foto: "url",
        nombres: "johana",
        apellidos: "samboni",
        documento: 10616127861,
        celular: "3236241297",
        correo: "johanasamboni@misena.edu.co",
        nacionalidad: "colombia",
        direccion: "cll 4 n14",
        userName: "johana",
        password: "12345678"
      },      
    ]
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {});
  }
};
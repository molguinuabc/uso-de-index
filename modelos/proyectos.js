const proyectos = [
    {
        id:1,
        descripcion: "proyecto 1",
        donadores: [
            {
              rfc: "RFC1",
              nombre: "Nombre 1"
            },
            {
                rfc: "RFC1",
                nombre: "Nombre 1"
            }

        ]
    },
    {
        id:2,
        descripcion: "proyecto 2",
        donadores:
        [
          {
            rfc: "RFC3",
            nombre: "Nombre 3"
          },
          {
              rfc: "RFC4",
              nombre: "Nombre 4"
          }
        ]
    }
]
const findAll = function(){
    return proyectos;
}
const findById = function (id) {
    let p = proyectos.find(e => e.id == id);
    return p;
}

exports.findAll = findAll;
exports.findByid = findById;
/*setTimeout(() => {
    console.log('Hola Mundo')
}, 2000);


const saludar = () =>{
    console.log('Hola Mundo');
}

setTimeout(saludar,2000);*/

const getUsuarioById = (id, callback) => {
  const user = {
    id,
    nombre: "Cedric",
  };

  setTimeout(() => callback(user), 1000);
};

const imprimirUsuario = (usuario) => {
  console.log(usuario.nombre);
};
getUsuarioById(10, imprimirUsuario);

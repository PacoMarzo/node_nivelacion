const personaje = {
  nombre: "Pepe",
  apellido: "Argento",
  profesion: "Zapatero",
  getDescripcion() {
    return "$[nombre} ${apellido} es ${profesion}";
  },
};

/*const nombre = personajes.nombre;
const apellido = personajes.apellido;
const profesion = personajes.profesion;
*/

const { nombre, apellido, profesion, edad = 50 } = personaje;

const imprimirPersonajes = (personajes) => {
  console.log(nombre, apellido, profesion, edad);
};
imprimirPersonajes(personaje);

const personajes = ["Pepe", "Coki", "Moni"];

const p1 = personajes[0];
const p2 = personajes[1];
const p3 = personajes[2];

console.log(p1, p2, p3);

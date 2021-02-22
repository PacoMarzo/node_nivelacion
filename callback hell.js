const empleados = [
  {
    id: 1,
    nombre: "Paco",
  },
  {
    id: 2,
    nombre: "Marta",
  },
  {
    id: 3,
    nombre: "Manuel",
  },
];

const sueldos = [
  {
    id: 1,
    sueldo: 1500,
  },
  {
    id: 2,
    sueldo: 2000,
  },
];

const getEmpleadoById = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);

  if (empleado) {
    callback(empleado);
  }
  callback(new Error("El empleado no Existe"));
};

const id = 1;

getEmpleadoById(id, ({ nombre }) => {
  console.log(`El empleado: ${nombre}...`);
});

// Hayq ue ligar a cada uno de ellos y crear  que diga, la Funcion se llama GetSueldoById y decir que el Empleado Cedric tiene de suelo Tanto . Asi con cada de uno de ellos.

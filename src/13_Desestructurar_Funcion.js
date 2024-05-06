const carro = {
  marca: 'seat',
  modelo: 'Fr',
  anio: 2018,
  nombre: 'Leon'
}

const detalle = (carrito) => {
  const {marca, modelo, nombre} = carrito;

  console.log(`El vehiculo de la marca ${marca} es el modelo ${modelo} y su nombre es ${nombre}`);
}

detalle(carro);
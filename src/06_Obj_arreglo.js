
const carro = {
  id: 1,
  nombre: 'Mercedes AMG',
  date: new Date(),
  marca: {
    id: 1,
    nombre: 'Mercedes',
    ubicacion: 'Alemania',
    age: 100
  },
  inventario: [
    {
      id: 1,
      color: 'Azul',
      cantidad: 5,
      precio: 1100000
    },
    {
      id: 2,
      color: 'Rojo',
      cantidad: 7,
      precio: 1250000
    },
    {
      id: 3,
      color: 'Blanco',
      cantidad: 8,
      precio: 1200003
    }
  ],
  totalInventario: function(){
    let total = 0;
    this.inventario.forEach(inventario => {
      total = total + inventario.precio*inventario.precio;
    });
    return total;
  },
  precio: 1000000,
  saludo: function(){
    return `Hola ${this.nombre}`;
  }
}
 
console.log(carro);
const salu = carro.saludo();
console.log(salu);
console.log(carro.totalInventario());
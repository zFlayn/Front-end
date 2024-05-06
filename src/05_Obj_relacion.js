
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
  precio: 1000000,
  saludo: function(){
    return `Hola ${this.nombre}`;
  }
}
 
console.log(carro);
const salu = carro.saludo();
console.log(salu);
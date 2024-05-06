
const carros = ['Ferrari', 'Nissan', 'Porsche', 'Mc Laren', 'Mercedes'];

carros.push('Mustang GT500', 'Challenger', 'Camaro');

const motos = ['Italika', 'Chopper', 'Ninja', 'Super sport'];

const tienda = [ ...carros, ...motos];

console.log(carros);
console.log(tienda);
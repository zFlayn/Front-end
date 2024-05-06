

const carros = ['Ferrari', 'Nissan GTR', 'Porsche', 'Mc Laren', 'Mercedes AMG'];
carros.push('Mustang GT500', 'Challenger', 'Camaro');
console.log(carros);

carros.forEach(carro => console.log(carro));

for ( const car of carros){
  console.log(car);
}

for (let i = 0; i < carros.length; i++){
  const elem = carros[i];
  console.log('i ' + elem);
}
const obtenerinfo = (name = 'Pablo', apellido = 'Capistran') => `${name} ${apellido}`;
const sum = (a=0, b=0) => a+b;
const info = obtenerinfo;

console.log(obtenerinfo());
console.log(sum(20,10));

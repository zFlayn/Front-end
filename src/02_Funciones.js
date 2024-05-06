function obtenerinfo(name='Pablo', apellido='Capistran'){
  const info = `${name} ${apellido}`;
  
  return info;
}

const info = obtenerinfo;

console.log(obtenerinfo());


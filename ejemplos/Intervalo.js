const fs = require('fs');
let contador = 0;

const intervalo = setInterval(() => {
  contador++;
  const mensaje = `Ejecución #${contador} - ${new Date().toLocaleTimeString()}\n`;

  console.log(mensaje);

  fs.appendFileSync('Tarea.txt', mensaje);

  if (contador === 5) {
    clearInterval(intervalo);
    console.log("Tarea detenida");
  }
}, 5000);

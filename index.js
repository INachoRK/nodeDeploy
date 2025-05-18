const cal = require("./ejercicios/opEnteros");
const exp = require('express');
const app = exp();
const inventario = require("./OperacionesObjetos/inventario");

app.get('/quierosumar', (req, res) => {
    let operacion = cal.suma(5, 3)
    res.end("<h2>la suma de 5 y 3 es: <h2>" + operacion);
})

app.get('/quierorestar', (req, res) => {
    let operacion = cal.resta(5, 3)
    res.end("<h2>la resta de 5 y 3 es: <h2>" + operacion);
})

app.get('/consultarproductos', (req, res) => {
    res.end(inventario.cargarDatos())
})

app.listen(8888, function() {
    console.log("Aplicación corriendo");
})

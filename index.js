import {suma, resta} from ('./ejercicios/opEnteros');
const exp = require('express');
const app = exp();

app.get('/quierosumar', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = a + b;
    res.send(`la suma de ${a} + ${b} es: ${resultado}`);
})

app.get('/quierorestar', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = a - b;
    res.send(`la resta de ${a} - ${b} es: ${resultado}`);
})

app.listen(8888, function() {
    console.log("Aplicación corriendo");
})
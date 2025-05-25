const cal = require("./ejercicios/opEnteros");
const exp = require('express');
const app = exp();
const inventario = require("./OperacionesObjetos/inventario");
const connection = require("./config/connection");
const modeloUsuario = require('./models/usuario.model')

app.get('/quierosumar', (req, res) => {
    let operacion = cal.suma(5, 3)
    res.end("<h2>la suma de 5 y 3 es: <h2>" + operacion);
})

app.get('/quierorestar', (req, res) => {
    let operacion = cal.resta(5, 3)
    res.end("la resta de 5 y 3 es: " + operacion);
})

app.get('/consultarproductos', (req, res) => {
    res.end(inventario.cargarDatos())
})

app.get('/conectar', (req, res) => {
    console.log('entramos al endpoint');
    console.log(connection)
    res.end();
})

app.get('/insertarusuario', (req,res)=>{
    const nuevoUsuario = new modeloUsuario({
        nombre: 'Juanito',
        edad: 30,
        correo: 'juan.perez@ejemplo.com'
    });

    nuevoUsuario.save()
        .then(usuario => {
            console.log('Usuario creado:', usuario);
        })
        .catch(err => {
            console.error('Error al crear usuario:', err);
        });
});

app.get('/consultarusuarios', (req, res) => {
    modeloUsuario.find()
        .then(usuarios => {
            console.log('Usuario encontrado:', usuarios);
            res.end('Esteban es una perra');

        })
        .catch(err => {
            console.error('Error al buscar usuarios:', err);
        });
});

app.listen(8888, function() {
    console.log('Aplicación corriendo');
})

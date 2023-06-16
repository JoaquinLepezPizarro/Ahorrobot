"use strict";
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
const mysql = require('mysql');
let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'ahorrobot'
});
connection.connect(function (err) {
    if (err) {
        console.error('ERROR AL CONECTARSE A LA BD: ' + err.stack);
        return;
    }
    console.log('CONECCION ESTABLECIDA CON EXITO ' + connection.threadId);
});
//OBTIENE UNA LISTA DEL PRODUCTO BUSCADO
app.get('/productos_vigentes/:nombreProducto', (req, res) => {
    let nombreProducto = req.params.nombreProducto;
    connection.query("SELECT * FROM productos_vigentes WHERE MATCH(descripcion) AGAINST (?) ORDER BY precio ASC", nombreProducto, function (error, results, fields) {
        //console.log(`El nombre del producto es: ${nombreProducto}`);  
        res.send(JSON.stringify(results));
    });
});
//OBTIENE TODO LO QUE ESTE EN LA TABLA FARMACIAS (ID, NOMBRE Y FOTO DE LAS FARMACIAS)
app.get('/farmacias', (req, res) => {
    //let idFarmacia = req.params.idFarmacia;
    //connection.query("SELECT linkLogo FROM farmacias JOIN productos_vigentes ON productos_vigentes.idFarmacia = farmacias.idFarmacia ", function(error:any, results:any, fields:any) {
    connection.query("SELECT * FROM farmacias", function (error, results, fields) {
        res.send(JSON.stringify(results));
        //console.log(`El id es ${idFarmacia}`); 
    });
});
app.listen(configuracion, () => {
    console.log(`Example app listening on port ${configuracion.port}`);
});
app.use(cors());

const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const morgan = require('morgan');
const dbconnection = require('express-myconnection');


//importand rutas
const rutasCliente = require("./rutas/cliente");


//Configuración de Express

app.set('port', process.env.PORT || 3000)

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));


//middlewares
app.use(morgan('dev'));
app.use(dbconnection(mysql, {
        host: 'aws.connect.psdb.cloud',
    user: 'mrvxipmtflzb6uv6j7ho',
    password: 'pscale_pw_eizCIrGYJwf2XlvLVibq6UtQZLzjW3A6KUEzPyNRQGQ',
    port: 3306,
    database: 'johndoedatabase',
    ssl: {
        rejectUnauthorized: false,
      }
}, 'single'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use("/", rutasCliente);

//archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


//empezar servidor
app.listen(app.get('port'), () => {
    console.log("Servidor listo");
});





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
        host: 'localhost',
    user: 'id22037847_user1',
    password: 'DemiLovato1@',
    port: 3306,
    database: 'id22037847_johndoedatabase',
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





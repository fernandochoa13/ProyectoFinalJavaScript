const express = require('express');
const router = express.Router();

const controladorCliente = require("../controladores/controladorCliente");

//Ruta inicio
router.get('/', controladorCliente.inicio);

//Rutas de propietarios
router.get('/propietario', controladorCliente.list);
router.post('/add', controladorCliente.save);
router.get('/delete/:idPropietario', controladorCliente.delete);
router.get('/update/:idPropietario', controladorCliente.edit);
router.post('/update/:idPropietario', controladorCliente.update);

//Rutas de mecánicos
router.get('/mec', controladorCliente.mecanicoslista);
router.post('/addmec', controladorCliente.guardarMecanico);
router.get('/deletemec/:idMecanico', controladorCliente.borrarMecanico);
router.get('/updatemec/:idMecanico', controladorCliente.editarMecanico);
router.post('/updatemec/:idMecanico', controladorCliente.updateMecanico);


//Rutas de vehículos
router.get('/vehiculo', controladorCliente.listaVehiculos);
router.post('/addvehiculo', controladorCliente.guardarVehiculo);
router.get('/deletevehiculo/:idVehiculo', controladorCliente.borrarVehiculo);
router.get('/updatevehiculo/:idVehiculo', controladorCliente.editarVehiculo);
router.post('/updatevehiculo/:idVehiculo', controladorCliente.updateVehiculo);

module.exports = router;
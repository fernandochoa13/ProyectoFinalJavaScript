const controlador = {};

controlador.inicio = (req, res) => {
    res.render('inicio');
}
//Métodos para Registro de Propietarios
controlador.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * from propietario', (err, propietarios) => {
            if(err) {
                res.json(err);
            }
            res.render('CRUDpropietarios/propietarios', {
                data: propietarios
            });
        });
    });

};

controlador.save = (req, res) => {
    req.getConnection((err, conn) => {
        const data = req.body;
        conn.query('INSERT INTO propietario SET ?', [data], (err, customer) => {
           res.redirect("/propietario");
        });
    })

}

controlador.delete = (req,res) => {
    const {idPropietario} = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM propietario where idPropietario = ?', [idPropietario], (err, rows) => {
            res.redirect("/propietario")
        })

    })
}

controlador.edit = (req,res) => {
    const {idPropietario} = req.params;
    req.getConnection((err,conn) => { 
        conn.query('SELECT * from propietario where idPropietario = ? ', [idPropietario], (err, propietario) => {
            res.render('CRUDpropietarios/propietarios_editar', {
                data: propietario[0]
            });
        });
}) }

controlador.update = (req,res) => {
    const {idPropietario} = req.params;
    const nuevoPropietario = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE propietario set ? where idPropietario = ?', [nuevoPropietario, idPropietario], (err,rows) => {
            res.redirect("/propietario")
        });
    })};

//Métodos para registrar Mecánicos

controlador.mecanicoslista = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * from mecanico', (err, mecanicos) => {
            if(err) {
                res.json(err);
            }
            res.render('CRUDmecanicos/mecanicos', {
                data: mecanicos
            });
        });
    });

};

controlador.guardarMecanico = (req, res) => {
    req.getConnection((err, conn) => {
        const data = req.body;
        conn.query('INSERT INTO mecanico SET ?', [data], (err, mecanico) => {
           res.redirect("/mec");
        });
    })

}

controlador.borrarMecanico = (req,res) => {
    const {idMecanico} = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM mecanico where idMecanico = ?', [idMecanico], (err, rows) => {
            res.redirect("/mec")
        })

    })
}

controlador.editarMecanico = (req,res) => {
    const {idMecanico} = req.params;
    req.getConnection((err,conn) => { 
        conn.query('SELECT * from mecanico where idMecanico = ? ', [idMecanico], (err, mecanico) => {
            res.render('CRUDmecanicos/mecanicos_editar', {
                data: mecanico[0]
            });
        });
}) }

controlador.updateMecanico = (req,res) => {
    const {idMecanico} = req.params;
    const nuevoMecanico = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE mecanico set ? where idMecanico = ?', [nuevoMecanico, idMecanico], (err,rows) => {
            res.redirect("/mec")
        });
    })};

//Métodos para registrar Vehículos

controlador.listaVehiculos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM vehiculo ", (err, vehiculos) => {
            conn.query("SELECT * FROM mecanico", (err, mecanico) => {
                conn.query("SELECT * FROM propietario", (err, propietario) => {
                    res.render('CRUDvehiculos/vehiculos', {
                        data: vehiculos,
                        data_m: mecanico,
                        data_p: propietario
                })
            })
            });
        });
    });
}

controlador.guardarVehiculo = (req, res) => {
    req.getConnection((err, conn) => {
        const data = req.body;
        conn.query('INSERT INTO vehiculo SET ?', [data], (err, vehiculo) => {
            
           res.redirect("/vehiculo");
        });
    })

}

controlador.borrarVehiculo = (req, res) => {
    const {idVehiculo} = req.params;
    req.getConnection((err, conn) => {
        conn.query("DELETE from vehiculo where idVehiculo = ?", [idVehiculo], (err, rows) => {
            res.redirect("/vehiculo")
        })
    })
}

controlador.editarVehiculo = (req,res) => {
    const {idVehiculo} = req.params;
    req.getConnection((err,conn) => { 
        conn.query('SELECT * from vehiculo where idVehiculo = ? ', [idVehiculo], (err, vehiculos) => {
            conn.query("SELECT * FROM mecanico", (err, mecanico) => {
                conn.query("SELECT * FROM propietario", (err, propietario) => {
                    res.render('CRUDvehiculos/vehiculos_editar', {
                        data: vehiculos[0],
                        data_m: mecanico,
                        data_p: propietario
                })
        });
} ) } )  } ) }

controlador.updateVehiculo = (req,res) => {
    const {idVehiculo} = req.params;
    const nuevoVehiculo = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE vehiculo set ? where idVehiculo = ?', [nuevoVehiculo, idVehiculo], (err,rows) => {
            res.redirect("/vehiculo")
        });
    })};

module.exports = controlador
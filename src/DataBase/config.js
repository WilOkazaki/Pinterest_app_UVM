//Requerimiento de Express
const express = require("express");
//Requerimiento de modulo que comunica los servidores
const cors = require("cors");
//Inicio de Exprees
const app = express();
//Requerimiento de la conexion
require("./conexion");
//Settings
app.set("appName", "Pinterest");
app.set("port", 3030);

//Middlewares
app.use(cors());
app.use(express.json());

//Requerimiento y uso de Rutas
app.use(require("./src/Routes/AppRoutes.jsx"));

//Servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor activo en : ${app.get("port")}`);
});

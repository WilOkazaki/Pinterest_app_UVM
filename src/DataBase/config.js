require("./conexion");
const express = require("express");
const app = express();

//Settings
app.set("appName", "Pinterest");
app.set("port", 3030);

//Middlewares
app.use(express.json());

//Rutas
app.use(require("./src/Routes/AppRoutes"));

//Servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor activo en : ${app.get("port")}`);
});

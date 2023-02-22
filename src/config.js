//Requerimiento de Express y Middlewares
import express from "express";
import morgan from "morgan";
import router from "./Routes/routes.js";
import path from "path";
import cors from "cors";

//Inicio de Exprees
const app = express();
//Requerimiento de la conexion
/* require("./conexion"); */
//Settings
app.set("port", process.env.PORT || 3030);
//Static Files
/* app.use(express.static(path.join(new URL(import.meta.url).pathname, ""))); */
const configDir = path.resolve();
const indexPath = path.join(configDir);
app.use(express.static(indexPath));
console.log(indexPath);

//Middlewares
app.use(morgan("dev"));
/* app.use(express.json()); */
/* app.use(cors());*/

//Requerimiento y uso de Rutas
/* app.use(router); */

//Servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor activo en : ${app.get("port")}`);
});

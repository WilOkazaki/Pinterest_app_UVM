const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Pinterest";
const db = mongoose.connection;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("open", (_) => {
  console.log("La base de datos esta conectada a ", url);
});
db.on("error", (err) => {
  console.log(err);
});
/* module.exports = mongoose; */

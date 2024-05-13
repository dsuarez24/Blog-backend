// index.js
const express = require('express');
const bodyParser = require('body-parser');
const actividadRoutes = require('./routes/actividadRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Usar las rutas de actividades
app.use('/', actividadRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

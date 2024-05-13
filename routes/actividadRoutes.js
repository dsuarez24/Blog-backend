// routes/actividadRoutes.js
const express = require('express');
const actividadController = require('../controllers/actividadController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de actividades!');
});

router.get('/actividades', actividadController.getActividades);
router.get('/actividades/:id', actividadController.getActividadById);
router.post('/actividades', actividadController.crearActividad);
router.put('/actividades/:id', actividadController.actualizarActividad);
router.delete('/actividades/:id', actividadController.eliminarActividad);

module.exports = router;

// controllers/actividadController.js
const Actividad = require('../models/actividadModel');

let actividades = [];

function getActividades(req, res) {
  res.json(actividades);
}

function getActividadById(req, res) {
  const id = req.params.id;
  const actividad = actividades.find(act => act.id === id);
  if (!actividad) {
    return res.status(404).json({ error: 'Actividad no encontrada' });
  }
  res.json(actividad);
}

function crearActividad(req, res) {
  const { id, titulo, descripcion, curso } = req.body;
  const nuevaActividad = new Actividad(id, titulo, descripcion, curso);
  actividades.push(nuevaActividad);
  res.status(201).json(nuevaActividad);
}

function actualizarActividad(req, res) {
  const id = req.params.id;
  const index = actividades.findIndex(act => act.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Actividad no encontrada' });
  }
  actividades[index] = req.body;
  res.json(actividades[index]);
}

function eliminarActividad(req, res) {
  const id = req.params.id;
  actividades = actividades.filter(act => act.id !== id);
  res.status(204).end();
}

module.exports = {
  getActividades,
  getActividadById,
  crearActividad,
  actualizarActividad,
  eliminarActividad
};
